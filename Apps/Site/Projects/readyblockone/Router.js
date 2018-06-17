const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework
const path = require('path')

import Loadable from 'react-loadable'
import Auth from '../../Core/Utils/Auth'
import DevTools from '../../Shared/UI/Components/DevTools'
import store from './Store'
import getReducers from './Reducers'
import { report } from 'import-inspector'

// Polyfill for nodejs /w babel
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }
if (typeof require.include !== "function") require.include = function() {}

let middleware = []

const Loading = () => <div>Loading</div>

const routes = [
    {
        path: '/',
        exact: true,
        component: Loadable({
            loader: function loader() {
                return report(
                    new Promise((resolve) => {
                        return require.ensure([], (require) => {
                            resolve(require('./UI/Screens/Home').default)
                        })
                    }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Home',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Home')
                    }
                )
            },
            loading: Loading
        })
    },
    {
        path: '/network',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Network').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Network',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Network')
                    });
            },
            loading: Loading
        })
    },
    {
        path: '/about',
        component: Loadable({
            loader: function loader() {
                return report(new Promise((resolve) => {
                    return require.ensure([], (require) => {
                        resolve(require('./UI/Screens/Network').default)
                    })
                }), {
                        currentModuleFileName: path.join(__dirname, './Router.js'),
                        importedModulePath: './UI/Screens/Network',
                        serverSideRequirePath: path.join(__dirname, './UI/Screens/Network')
                    });
            },
            loading: Loading
        })
    },
    // Exchanges
    { path: '/go/binance', component: () => window.location = 'https://www.binance.com/?ref=10031868' },
    { path: '/go/bittrex', component: () => window.location = '' },
    { path: '/go/bitfinex', component: () => window.location = '' },
    { path: '/go/bitstamp', component: () => window.location = '' },
    { path: '/go/gemini', component: () => window.location = '' },
    { path: '/go/coinbase', component: () => window.location = '' },
    { path: '/go/kraken', component: () => window.location = '' },
    { path: '/go/bitflyer', component: () => window.location = '' },
    { path: '/go/bitthumb', component: () => window.location = '' },
    { path: '/go/bitthumb', component: () => window.location = '' },
    { path: '/go/etoro', component: () => window.location = '' },
    // Wallets
    { path: '/go/trezor', component: () => window.location = '' },
    { path: '/go/ledger', component: () => window.location = '' },
    { path: '/go/jaxx', component: () => window.location = '' },
    { path: '/go/metamask', component: () => window.location = '' },
    // Other
    { path: '/go/cmc', component: () => window.location = '' },
]

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    getReducers: getReducers
}
