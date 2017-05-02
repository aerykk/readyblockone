const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework

import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import {HotKeys} from 'react-hotkeys'
import configureStore from './Store'
import auth from '../../Core/Utils/Auth.js'

// Polyfill for nodejs /w babel
if (typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };
if (typeof require.include !== "function") require.include = function() {};

const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        changeMonitorKey='ctrl-m'
        defaultIsVisible={false}>
        <LogMonitor theme="tomorrow" preserveScrollTop={false} />
    </DockMonitor>
)

const store = configureStore(DevTools.instrument())

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
                    <a href="http://hackatron.rocks.local:10020/">Go to Hackatron</a>
                </li>
                <li>
                    <a href="http://ttt.stokegames.com.local:10010/">Go to TTT</a>
                </li>
            </ul>
        );
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
        };

        const map = {
            'toggleToolbar': 'ctrl+n'
        };

        const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

        return (
            <div>
                <HotKeys handlers={handlers} keyMap={map}>
                    <div>
                        {this.props.children}
                        {isLocal && <DevTools />}
                        {isLocal && this.state.toolbarActive && <Toolbar />}
                    </div>
                </HotKeys>
            </div>
        );
    }
}


const routes = {
    component: App,
    childRoutes: [
        {path: '/', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Home').default) }) } },
        {path: '/games', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/:key', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/GameDetails').default) }) } },
        {path: '/categories', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Categories').default) }) } },
        {path: '/category/:key', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/CategoryDetails').default) }) } },
        {path: '/news', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/News').default) }) } },
        {path: '/news/:key', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/NewsDetails').default) }) } },
        {path: '/about', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/contact', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/news', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } }
    ]
}

export default {
    routes: routes,
    store: store
}