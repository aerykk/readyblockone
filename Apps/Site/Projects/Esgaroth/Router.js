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


class Toolbar extends Component {
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
        )
    }
}

class App extends Component {
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
            <div>
                <HotKeys handlers={handlers} keyMap={map}>
                    <div>
                        {this.props.children}
                        {isLocal && <DevTools />}
                        {isLocal && this.state.toolbarActive && <Toolbar />}
                    </div>
                </HotKeys>
            </div>
        )
    }
}


const routes = {
    component: App,
    childRoutes: [
        {path: '/', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Home').default) }) } },
        {path: '/games', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/browser', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/downloadable', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/mobile', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/game/:key', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/GameDetails').default) }) } },
        {path: '/news', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Document').default) }) } },
        {path: '/news/:key', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Document').default) }) } },
        {path: '/logout', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Logout').default) }) } },
        {path: '/about', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Document').default) }) } },
        {path: '/careers', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Document').default) }) } },
        {path: '/contact', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Document').default) }) } },
        {path: '/community', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Document').default) }) } },
        {path: '/support', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Document').default) }) } },
    ]
}

routes.childRoutes.push({
    onEnter: redirectToDashboard,
    childRoutes: [
        // Unauthenticated routes
        // Redirect to dashboard if user is already logged in
        {
            path: '/login',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Login').default)
                })
            }
        }
        // ...
    ]
})

routes.childRoutes.push({
    onEnter: redirectToLogin,
    childRoutes: [
        // Protected routes that don't share the dashboard UI
        {
            path: '/user/:id',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/User').default)
                })
            }
        }
        // ...
    ]
})

routes.childRoutes.push({
    path: '/testing',
    getComponent: (nextState, cb) => {
        // Share the path
        // Dynamically load the correct component
        if (Auth.loggedIn()) {
            return require.ensure([], (require) => {
                cb(null, require('./UI/Screens/Dashboard').default)
            })
        }

        return require.ensure([], (require) => {
            cb(null, require('./UI/Screens/Document').default)
        })
    },
    indexRoute: {
        getComponent: (nextState, cb) => {
            // Only load if we're logged in
            if (Auth.loggedIn()) {
                return require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/User'))
                })
            }
            return cb()
        }
    },
    childRoutes: [
        {
            onEnter: redirectToLogin,
            childRoutes: [
                // Protected nested routes for the dashboard
                {
                    path: '/page2',
                    getComponent: (nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('./UI/Screens/User').default)
                        })
                    }
                }
                // ...
            ]
        }
    ]
})

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    reducers: reducers
}
