const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework
const path = require('path')

import Loadable from 'react-loadable'
import Auth from '../../Core/Utils/Auth'
import DevTools from '../../Shared/UI/Components/DevTools'
import store from './Store'
import reducers from './Reducers'
import { report } from 'import-inspector'

// Polyfill for nodejs /w babel
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }
if (typeof require.include !== "function") require.include = function() {}

let middleware = []

function redirectToLogin(nextState, replace) {
    if (!Auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

function redirectToDashboard(nextState, replace) {
    if (Auth.loggedIn()) {
        replace('/')
    }
}


const Loading = () => <div>Loading</div>

const routes = [
    {
        path: '/',
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
            loading: Loading
        })
    },
]

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    reducers: reducers
}
