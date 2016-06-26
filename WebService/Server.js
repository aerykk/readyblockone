const express = require('express')
const webpack = require('webpack')
const http = require('http')
const exec = require('child_process').exec
const url = require('url')
const fs = require('fs')
const request = require('request')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../webpack.config.js')

const Framework = require('../App/Framework')
const {AppWrapper, AppConfig} = Framework

import React from 'react'
import {renderToString} from 'react-dom/server'
import {createStore, applyMiddleware, compose} from 'redux'
import {ReduxAsyncConnect, loadOnServer} from 'redux-connect'
import {Provider} from 'react-redux'
import {Router, RouterContext, match} from 'react-router'
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux'
import createHistory from 'react-router/lib/createMemoryHistory'
import DataClient from './DataClient'
import httpProxy from 'http-proxy'
import HTML from './HTML'
import clientMiddleware from './middleware/clientMiddleware'

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const config = require('../config')

class Server {
    constructor() {
        this.env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
        this.host = process.env.HOST ? process.env.HOST : config.webService.host
        this.port = process.env.PORT ? process.env.PORT : config.webService.port
        this.events = []
        this.clients = []
        this.hostClient = null
        this.proxy = httpProxy.createProxyServer({
            target: 'http://' + config.dataService.host + ':' + config.dataService.port,
            ws: true
        })
    }
    
    initProxies() {    
        // Proxy to API server
        this.app.use('/api', (req, res) => {
            this.proxy.web(req, res, {target: targetUrl})
        })

        // Proxy web sockets
        this.app.use('/ws', (req, res) => {
            this.proxy.web(req, res, {target: targetUrl + '/ws'})
        })

        // Proxy upgrade to web sockets
        this.server.on('upgrade', (req, socket, head) => {
            this.proxy.ws(req, socket, head)
        })

        // Added the error handling to avoid issue
        // https://github.com/nodejitsu/node-http-proxy/issues/527
        this.proxy.on('error', (error, req, res) => {
            let json = null

            if (error.code !== 'ECONNRESET') {
                console.error('proxy error', error)
            }
            if (!res.headersSent) {
                res.writeHead(500, {'content-type': 'application/json'})
            }

            json = {error: 'proxy_error', reason: error.message}
            res.end(JSON.stringify(json))
        })

        // 
        // // API proxy
        // this.app.use(function(req, res, next) {
        //     console.log('[WebService] Requesting: ' + req.url)
        // 
        //     if(new RegExp('/api/v1/').test(req.url)) {
        //         let response = []
        // 
        //         req.on('data', function(chunk) { 
        //             response.push(chunk)
        //         })
        // 
        //         req.on('end',function() {
        //             let params = {
        //                 url: 'http://localhost:11013' + req.url.replace('/api/v1/', '/'), 
        //                 headers: req.headers
        //             }
        // 
        //             if (req.method === 'POST' || req.method === 'PUT') {
        //                 let body = Buffer.concat(response)
        // 
        //                 if (!body.length) {
        //                     console.log('[WebService] Received POST request with no data')
        // 
        //                     res.status(500)
        //                     res.render('internalServerError')
        //                     return
        //                 }
        // 
        //                 params.body = body
        //             }
        // 
        //             console.log('[WebService] Requesting data: ' + req.method + ' ' + params.url + ' ' + params.body)
        // 
        //             request[req.method.toLowerCase()](params)
        //                 .on('error', function(err, response, body) {
        //                     console.log('Problem with pipe: ' + err.message)
        // 
        //                     res.status(500)
        //                     res.render('internalServerError')
        //                 })
        //                 .pipe(res)
        //         })
        //     }
        //     else {
        //         next && next()
        //     }
        // })
    }

    init() {
        this.app = express()
        this.server = http.createServer(this.app)
        this.dataClient = new DataClient()
        
        this.initProxies()

        if (this.env === 'development') {
            webpackConfig.devtool = 'eval' // Speed up incremental builds
            webpackConfig.entry['game.web'].unshift('webpack-hot-middleware/client?path=/__webpack_hmr')
            webpackConfig.entry['widget.web'].unshift('webpack-hot-middleware/client?path=/__webpack_hmr')
            webpackConfig.output.publicPath = '/Build/Release/'
            webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin())
            webpackConfig.plugins.unshift(new webpack.NoErrorsPlugin())
            webpackConfig.module.loaders[0].query.presets.push('react-hmre')

            const compiler = webpack(webpackConfig)

            this.app.use(webpackDevMiddleware(compiler, {
                publicPath: webpackConfig.output.publicPath,
                stats: {
                    colors: true,
                    hash: false,
                    timings: true,
                    chunks: false,
                    chunkModules: false,
                    modules: false
                }
            }))

            this.app.use(webpackHotMiddleware(compiler, {
                hot: true,
                historyApiFallback: true
            }))
        }

        // Web server
        this.app.use(express.static(__dirname + '/../'))

        // Facebook Canvas needs to send a POST request
        this.app.post('/', (req, res, next) => {
            req.pipe(request.get('http://' + this.host + ':' + this.port + '/')).pipe(res)
        })
        
        // Web server
        this.app.use(express.static(__dirname + '/../'))

        // Server-side rendering
        this.app.use((req, res, next) => {
            var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
            console.info('[WebService] Requested: ' + fullUrl)

            var SiteRouter = require('../App/Game/Router')(req.get('host'))

            const data = null
            const memoryHistory = createHistory(req.originalUrl)
            const reduxRouterMiddleware = routerMiddleware(memoryHistory)
            const reducers = {...SiteRouter.reducers}
            const middleware = [clientMiddleware(this.dataClient), reduxRouterMiddleware, ...SiteRouter.middleware]
            const finalStore = SiteRouter.store.configure(reducers, middleware)
            const history = syncHistoryWithStore(memoryHistory, finalStore)

            // React router
            match({
                history: history,
                routes: SiteRouter.routes,
                location: req.originalUrl
            }, (error, redirectLocation, renderProps) => {
                if (error) {
                    return res.status(500).send(error.message)
                }

                if (redirectLocation) {
                    return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
                }

                if (!renderProps) {
                    // return next('err msg: route not found') // yield control to next middleware to handle the request
                    return res.status(404).send('Not found')
                }

                // Setup the data client handlers
                this.dataClient.run(req)

                loadOnServer({...renderProps, store: finalStore, helpers: {client: this.dataClient}})
                .then(() => {
                    class App extends React.Component {
                        toString() {'[App]'}

                        render() {
                            return (
                                <AppWrapper config={AppConfig}>
                                    <Provider store={finalStore} key="provider">
                                        <Router render={(props) =>
                                            <ReduxAsyncConnect {...props} {...renderProps} />
                                            } history={history} routes={SiteRouter.routes}>
                                        </Router>
                                    </Provider>
                                </AppWrapper>
                            )
                        }
                    }

                    let page = renderToString(<HTML view={<App />} store={finalStore} />)
                    
                    res.status(200).send('<!doctype html>\n' + page)
                })
                .catch(err => res.end(err.message))
            })
        })
    }

    start() {
        if (this.env === 'development') {
            require('look').start(config.profilerService.port, config.profilerService.host)
        }

        this.io = require('socket.io').listen(this.server)

        this.io.sockets.on('connection', (socket) => {
            this.onSocketConnect(socket)

            socket.on('disconnect', () => {
                this.onSocketDisconnect(socket)
            })
        })

        this.monitorHost()

        setInterval(() => {
            return // TODO: do we need this?
            if (!this.hostClient) return console.log('No host')
            if (!this.hostClient.player) return console.log('Host has no player')

            console.log('Host: ', this.hostClient.player.id)
        }, 2000)

        this.server.listen(this.port, this.host, (err) => {
            if (err) { console.log(err) }

            console.info('==> Web Service running on port %s (env: ' + this.env + '). Open up http://0.0.0.0:%s/ in your browser.', this.port, this.port)
        })
    }

    setHost(client) {
        console.log('Setting host to player: ' + client.player.id)
        this.hostClient = client
    }

    findNewHost() {
        if (this.clients.length > 0) {
            var i = getRandomInt(0, this.clients.length-1)
            var client = this.clients[i]

            // Make sure client had time to initialize the player
            if (client) {
                this.setHost(client)

                console.log('New host: ' + this.hostClient.player.id)
                this.io.sockets.emit('setHost', {player: this.hostClient.player})
            }
        }
    }

    getClientHost() {
        if (!this.clients.length) { return }
        return this.clients.reduce((previousClient, currentClient) => { if (previousClient && previousClient.player.id === this.hostClient.player.id) { return previousClient } else if (currentClient.player.id === this.hostClient.player.id) { return currentClient }})
    }

    findClientBySocket(socket) {
        if (!this.clients.length) { return }
        return this.clients.reduce((previousClient, currentClient) => { if (previousClient && previousClient.socket === socket) { return previousClient } else if (currentClient.socket === socket) { return currentClient }})
    }

    addClient(client) {
        console.log('Adding player: ' + client.player.id)
        this.clients.push(client)
    }

    removeClient(client) {
        console.log('Removing player: ' + client.player.id)

        this.clients.splice(this.clients.indexOf(client), 1)
    }

    fireEvent(socket, event) {
        socket.emit('events', {events: [event]})
    }

    fireAllPlayers(event) {
        this.io.sockets.emit('events', {events: [event]})
    }

    parseEvent(socket, event) {
        if (event.key === 'newPlayer') {
            console.log('Handshaking...')

            this.addClient({socket: socket, player: event.info.player})

            // If it's the first client or there's no hosts, lets set it as the new host
            if (!this.hostClient) {
                this.setHost(this.clients[this.clients.length-1])
                console.log('New host: ' + this.hostClient.player.id)
            }

            this.fireEvent(socket, {key: 'setHost', info: {player: this.hostClient.player}})
        } else if (event.key === 'this.findNewHost') {
            console.log("Finding new host....")
            var client = this.findClientBySocket(socket)
            this.removeClient(client)
            this.hostClient = null
            this.findNewHost()
        } else {
            //socket.broadcast.emit(event.key, event.info)
        }
    }

    onSocketConnect(socket) {
        console.log('New connection.. waiting for handshake')

        // TODO: give them 10 seconds to identify as a newPlayer, or cut them off

        socket.on('events', (data) => {
            //console.log('Incoming events: ' + data)
            data = JSON.parse(data)

            data.events.forEach((event) => { this.parseEvent(socket, event) })

            socket.broadcast.emit('events', data)
        })
    }

    onSocketDisconnect(socket) {
        var client = this.findClientBySocket(socket)

        if (!client) { return }

        this.removeClient(client)

        // If this client was the host,
        // and there's at least one more client connected,
        // lets choose a new random host,
        // and broadcast it to everybody
        if (client.player.id === this.hostClient.player.id) {
            this.hostClient = null
            this.findNewHost()
        }

        if (this.clients.length === 0) {
            this.hostClient = null
        }

        this.fireAllPlayers({key: 'playerLeave', info: {player: client.player}})
    }

    // Monitor the clients to make sure they are still defined
    monitorHost() {
        if (!this.hostClient) {
            this.findNewHost()
        }

        setTimeout(this.monitorHost.bind(this), 50)
    }
}

export default Server
