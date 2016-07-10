const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework

import {HotKeys} from 'react-hotkeys'
import Auth from '../../Core/Utils/Auth'
import DevTools from '../../Shared/UI/Components/DevTools'
import store from './Store'
import reducers from './Reducers'

// Polyfill for nodejs /w babel
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) }
if (typeof require.include !== "function") require.include = function() {}

if (Framework.Platform.Env.isBrowser) {
    // TODO: Remove this hacky stuff
    window.Utils = require('./Game/Core/Utils')
}

let middleware = []

class Toolbar extends React.Component {
    render() {
        return (
            <ul style={{
                    position: 'fixed',
                    left: '0',
                    top: '0',
                    height: '100%',
                    width: '20%',
                    background: '#000',
                    color: '#fff',
                    zIndex: 100
                }}>
                <li>
                    <a href="http://">Go to X</a>
                </li>
                <li>
                    <a href="http://">Go to Y</a>
                </li>
            </ul>
        )
    }
}

class App extends React.Component {
    constructor() {
        super()

        this.toggleToolbar = this.toggleToolbar.bind(this)

        this.state = {
            toolbarActive: false
        }
    }

    toggleToolbar() {
        console.log('toggleToolbar')

        this.setState({
            toolbarActive: !this.state.toolbarActive
        })
    }

    render() {
        const handlers = {
            'toggleToolbar': this.toggleToolbar
        }

        const map = {
            'toggleToolbar': 'ctrl+n'
        }

        const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

        return (
            <View>
                <HotKeys handlers={handlers} keyMap={map}>
                    <View>
                        <View id="game"></View>

                        {this.props.children}
                        {isLocal && <DevTools />}
                        {isLocal && this.state.toolbarActive && <Toolbar />}
                    </View>
                </HotKeys>
            </View>
        )
    }
}


const onEnterHome = function(nextState, replace) {
    replace({
        pathname: '/launch',
        state: { nextPathname: nextState.location.pathname }
    })
}

const routes = {
    component: App,
    childRoutes: [
        {path: '/', onEnter: onEnterHome, getComponent: (nextState, cb) => { return cb(null, require('./UI/Screens/Home').default) } },
        {path: '/launch', getComponent: (nextState, cb) => { return cb(null, require('./UI/Screens/Launch').default) } },
        {path: '/game', getComponent: (nextState, cb) => { return cb(null, require('./UI/Screens/Game').default) } },
    ]
}




export default {
    routes: routes,
    store: store,
    middleware: middleware,
    reducers: reducers
}
