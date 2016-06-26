const Framework = require('../App/Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework


const config = require('../config')
const methods = ['get', 'post', 'put', 'patch', 'del']

const superagent = require('superagent')

function formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? '/' + path : path
    if (Framework.Platform.Env.isServer) {
        // Prepend host and port of the API server to the path.
        return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath
    }
    // Prepend `/api` to relative URL, to proxy to API server.
    return '/api' + adjustedPath
}

class DataClient {
    run(req) {
        methods.forEach((method) => {
            this[method] = (path, {params, data} = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](formatUrl(path))

                if (params) {
                    request.query(params)
                }

                if (Framework.Platform.Env.isServer && req.get('cookie')) {
                    request.set('cookie', req.get('cookie'))
                }

                if (data) {
                    request.send(data)
                }

                request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body))
            })
        })
    }
}

module.exports = DataClient
