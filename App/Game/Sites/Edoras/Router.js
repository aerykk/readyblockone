import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { Provider } from 'react-redux'
import configureStore from './Store'
import auth from '../../Core/Utils/Auth.js'

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

const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

var App = props => (
    <div>{props.children}
        {isLocal && <DevTools />}
    </div>
)

var routes = {
    component: App,
    childRoutes: [
        {
            path: '/',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Launch').default)
                })
            }
        },
        {
            path: '*',
            getComponent: (nextState, cb) => {
                return require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Launch').default)
                })
            }
        }
    ]
};

export default {
    routes: routes,
    store: store
}
