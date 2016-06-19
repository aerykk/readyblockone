import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { Provider } from 'react-redux'
import configureStore from './Store'
import auth from '../../Core/Utils/Auth.js'
import {HotKeys} from 'react-hotkeys';

// Polyfill for nodejs /w babel
if(typeof require.ensure !== "function") require.ensure = function(d, c) { c(require) };
if(typeof require.include !== "function") require.include = function() {};

function redirectToLogin(nextState, replace) {
    if (!auth.loggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        })
    }
}

function redirectToDashboard(nextState, replace) {
    if (auth.loggedIn()) {
        replace('/')
    }
}

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
        {path: '/', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Launch').default) }) } },
        {path: '/games', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/browser', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/downloadable', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/mobile', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Games').default) }) } },
        {path: '/games/:key', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Game').default) }) } },
        {path: '/blog/:key', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/logout', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Logout').default) }) } },
        {path: '/about', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/careers', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/contact', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/community', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/support', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } },
        {path: '/news', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Default').default) }) } }
    ]
};

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
        { path: '/user/:id',
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
        if (auth.loggedIn()) {
            return require.ensure([], (require) => {
                cb(null, require('./UI/Screens/Dashboard').default)
            })
        }
        
        return require.ensure([], (require) => {
            cb(null, require('./UI/Screens/Default').default)
        })
    },
    indexRoute: {
        getComponent: (nextState, cb) => {
            // Only load if we're logged in
            if (auth.loggedIn()) {
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
    store: store
}
