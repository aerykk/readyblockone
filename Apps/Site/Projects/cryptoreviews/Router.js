const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework
const path = require('path')

import Loadable from 'react-loadable'
import { report } from 'import-inspector'
import store from './Store'
import getReducers from './Reducers'

// Polyfill for nodejs /w babel
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }
if (typeof require.include !== "function") require.include = function() {}

let middleware = []

function Loading(props) {
    if (props.error) {
        return <div>Error! <button onClick={props.retry}>Retry</button></div>;
    } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={props.retry}>Retry</button></div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

const routes = [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Home').default)
                    })
                }), {
                    currentModuleFileName: path.join(__dirname, './Router.js'),
                    importedModulePath: './UI/Screens/Home',
                    serverSideRequirePath: path.join(__dirname, './UI/Screens/Home')
                });
            },
            modules: ["./UI/Screens/Home"],
            webpack: function webpack() {
                return [require.resolveWeak("./UI/Screens/Home")]
            },
            loading: Loading,
            delay: 1000,
            timeout: 10000
        })
    }
]

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    getReducers: getReducers
}
