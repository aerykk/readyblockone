const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework

import DevTools from '../../Shared/UI/Components/DevTools'
import store from './Store'
import reducers from './Reducers'

// Polyfill for nodejs /w babel
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }
if (typeof require.include !== "function") require.include = function() {}

class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

const middleware = []

const routes = {
    component: App,
    childRoutes: [
        {path: '/', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Home').default) }) } },
    ]
}

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    reducers: reducers
}
