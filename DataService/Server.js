import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import * as actions from './actions/index'
import {mapUrl} from './utils/url'
import PrettyError from 'pretty-error'
import http from 'http'
import SocketIo from 'socket.io'

class Server {
    constructor() {
    }
    
    init() {
        this.apiHost = process.env.API_HOST || 'localhost'
        this.apiPort = process.env.API_PORT || 11013
        this.app = express()
        this.server = new http.Server(this.app)
        this.io = new SocketIo(this.server)
        this.io.path('/ws')

        this.app.use(session({
            secret: 'stoke games rocks!!!',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 }
        }))

        this.app.use(bodyParser.json())
        
        const pretty = new PrettyError()

        this.app.use((req, res) => {
            console.log('[DataService] Requesting: ' + req.url);

            const splittedUrlPath = req.url.split('?')[0].split('/').slice(1)

            const {action, params} = mapUrl(actions, splittedUrlPath)

            if (action) {
                action(req, params)
                    .then((result) => {
                        if (result instanceof Function) {
                            return result(res)
                        }

                        res.json(result)
                    }, (reason) => {
                        if (reason && reason.redirect) {
                            return res.redirect(reason.redirect)
                        }

                        console.error('[DataService] ERROR:', pretty.render(reason))
                        res.status(reason.status || 500).json(reason)
                    })
            } else {
                res.status(404).end('NOT FOUND')
            }
        })

        const bufferSize = 100
        const messageBuffer = new Array(bufferSize)
        let messageIndex = 0

        if (!this.apiPort) {
            console.error('[DataService] ERROR: No PORT environment variable has been specified')
        }

        this.io.on('connection', (socket) => {
            socket.emit('news', {msg: `'Hello World!' from server`})

            socket.on('history', () => {
                for (let index = 0; index < bufferSize; index++) {
                    const msgNo = (messageIndex + index) % bufferSize
                    const msg = messageBuffer[msgNo]
                    if (msg) {
                        socket.emit('msg', msg)
                    }
                }
            })

            socket.on('msg', (data) => {
                data.id = messageIndex
                messageBuffer[messageIndex % bufferSize] = data
                messageIndex++
                this.io.emit('msg', data)
            })
        })
    }
    
    start() {
        const runnable = this.app.listen(this.apiPort, (err) => {
            if (err) {
                console.error(err)
            }
            console.info('==> Data Server running on port %s', this.apiPort)
        })

        this.io.listen(runnable)
    }
}

export default Server