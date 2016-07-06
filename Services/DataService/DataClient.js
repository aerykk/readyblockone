const Framework = require('../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework

const config = require('../../config')
const methods = ['get', 'post', 'put', 'patch', 'del']

const superagent = require('superagent')

function formatUrl(path) {
    const adjustedPath = path[0] !== '/' ? '/' + path : path
    if (Framework.Platform.Env.isServer) {
        // Prepend host and port of the API server to the path
        return 'http://' + config.apiHost + ':' + config.apiPort + adjustedPath
    }
    // Prepend `/api/v1` to relative URL, to proxy to API server
    return '/api/v1' + adjustedPath
}

class DataClient {
    constructor(req) {
        methods.forEach((method) => {
            this[method] = (path, {params, data} = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](formatUrl(path))

                if (params) {
                    request.query(params)
                }

                if (req && req.get('cookie')) {
                    request.set('cookie', req.get('cookie'))
                }

                if (data) {
                    request.send(data)
                }

                request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body)) // eslint-disable-line
            })
        })
    }
    /*
    * There's a V8 bug where, when using Babel, exporting classes with only
    * constructors sometimes fails. Until it's patched, this is a solution to
    * "ApiClient is not defined" from issue #14.
    * https://github.com/erikras/react-redux-universal-hot-example/issues/14
    *
    * Relevant Babel bug (but they claim it's V8): https://phabricator.babeljs.io/T2455
    *
    * Remove it at your own risk.
    */
    empty() {}
}

module.exports = DataClient
