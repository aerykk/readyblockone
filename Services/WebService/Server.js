import createMemoryHistory from 'history/createMemoryHistory'
import { StaticRouter } from 'react-router'

const express = require('express')
const webpack = require('webpack')
const http = require('http')
const request = require('request')
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('../../webpack.config.js')

const Framework = require('../../Framework')
const {AppWrapper, AppConfig, React, Provider, Router, match, routerMiddleware, syncHistoryWithStore, ReduxAsyncConnect, loadOnServer, renderToString} = Framework

const DataClient = require('../DataService/DataClient')
const httpProxy = require('http-proxy')
const HTML = require('./HTML').default
const UI = require('../../Apps/Site/UI').default
const clientMiddleware = require('./middleware/clientMiddleware').default

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const config = require('../../config')

const dataServiceEndpoint = 'http://' + config.dataService.host + ':' + config.dataService.port

class Server {
    constructor() {
        this.env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
        this.host = process.env.HOST ? process.env.HOST : config.webService.host
        this.port = process.env.PORT ? process.env.PORT : config.webService.port
        this.events = []
        this.clients = []
        this.hostClient = null
        this.proxy = httpProxy.createProxyServer({
            target: dataServiceEndpoint,
            ws: true
        })
    }

    initProxies() {
        // Proxy to API server
        this.app.use('/api/v1', (req, res) => {
            this.proxy.web(req, res, {target: dataServiceEndpoint})
        })

        // Proxy web sockets
        this.app.use('/ws', (req, res) => {
            this.proxy.web(req, res, {target: dataServiceEndpoint + '/ws'})
        })

        // Proxy upgrade to web sockets
        this.server.on('upgrade', (req, socket, head) => {
            this.proxy.ws(req, socket, head)
        })

        // Added the error handling to avoid issue
        // https://github.com/nodejitsu/node-http-proxy/issues/527
        this.proxy.on('error', (error, req, res) => {
            let json = null

            try {
                if (error.code !== 'ECONNRESET') {
                    console.error('proxy error', error)
                }
                if (!res.headersSent) {
                    res.writeHead(500, {'content-type': 'application/json'})
                }

                json = {error: 'proxy_error', reason: error.message}
                res.end(JSON.stringify(json))
            } catch (e) {
                console.log(e)
            }
        })
    }

    init() {
        this.app = express()
        this.server = http.createServer(this.app)

        this.initProxies()
        
        webpackConfig.mode = this.env

        if (this.env === 'development') {
            webpackConfig.devtool = 'eval' // Speed up incremental builds
            // webpackConfig.entry['site.web'].unshift('webpack-hot-middleware/client?path=/__webpack_hmr')
            // webpackConfig.entry['widget.web'].unshift('webpack-hot-middleware/client?path=/__webpack_hmr')
            webpackConfig.output.publicPath = '/Build/Release/'
            webpackConfig.plugins.unshift(new webpack.NoEmitOnErrorsPlugin())

            // webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin())
            // webpackConfig.module.rules[0].use[0].query.presets.push('react-hmre')

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

            this.app.use(webpackHotMiddleware(compiler))
        }

        // Web server
        this.app.use(express.static(__dirname + '/../../'))

        // Facebook Canvas needs to send a POST request
        this.app.post('/', (req, res) => {
            req.pipe(request.get('http://' + this.host + ':' + this.port + '/')).pipe(res)
        })

        // Favicon
        this.app.get('/favicon.ico', (req, res) => {
            res.status(404).send('Not found')
        })

        // Server-side rendering
        this.app.use((req, res) => {
            const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
            console.info('[WebService] Requested: ' + fullUrl)

            const SiteRouter = require('../../Apps/Site/Router')(req.get('host'))

            const data = {}
            const dataClient = new DataClient()
            const history = createMemoryHistory(req.originalUrl)
            const reduxRouterMiddleware = routerMiddleware(history)
            const reducers = { ...SiteRouter.getReducers(req.get('host')) }
            const middleware = [clientMiddleware(dataClient), reduxRouterMiddleware, ...SiteRouter.middleware]
            const store = SiteRouter.store.configure(reducers, middleware, data)
            //const history = syncHistoryWithStore(memoryHistory, store)
            const routes = SiteRouter.routes
            const location = req.originalUrl

            const context = {}
            const ui = renderToString(
                <StaticRouter
                    location={location}
                    context={context}
                >
                    <UI store={store} history={history} routes={routes} />
                </StaticRouter>
            )

            const page = renderToString(
                <HTML ui={ui} store={store} />
            )

            if (context.url) {
                res.writeHead(301, {
                    Location: context.url
                })
                res.end()
            } else {
                res.status(200)
                res.write('<!DOCTYPE html>\n' + page)
                res.end()
            }
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

        // TODO: do we need this?
        // setInterval(() => {
        //     if (!this.hostClient) return console.log('No host')
        //     if (!this.hostClient.player) return console.log('Host has no player')
        //
        //     console.log('Host: ', this.hostClient.player.id)
        // }, 2000)

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
            const i = getRandomInt(0, this.clients.length - 1)
            const client = this.clients[i]

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
                this.setHost(this.clients[this.clients.length - 1])
                console.log('New host: ' + this.hostClient.player.id)
            }

            this.fireEvent(socket, {key: 'setHost', info: {player: this.hostClient.player}})
        } else if (event.key === 'this.findNewHost') {
            console.log('Finding new host....')
            const client = this.findClientBySocket(socket)
            this.removeClient(client)
            this.hostClient = null
            this.findNewHost()
        } else {
            // socket.broadcast.emit(event.key, event.info)
        }
    }

    onSocketConnect(socket) {
        console.log('New connection.. waiting for handshake')

        // TODO: give them 10 seconds to identify as a newPlayer, or cut them off

        socket.on('events', (rawData) => {
            // console.log('Incoming events: ' + rawData)
            const data = JSON.parse(rawData)

            data.events.forEach((event) => { this.parseEvent(socket, event) })

            socket.broadcast.emit('events', data)
        })
    }

    onSocketDisconnect(socket) {
        const client = this.findClientBySocket(socket)

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
