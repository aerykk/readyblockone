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
    <DockMonitor toggleVisibilityKey='ctrl-h'
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


var pages = [
    'about',
    'careers',
    'contact',
    'games',
    'news',
    'blog/hackatron-beta'
]

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
            path: '/logout',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Logout').default)
                })
            }
        },
        {
            path: '/games',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Games').default)
                })
            }
        },
        {
            path: '/games/:key',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Game').default)
                })
            }
        },
        {
            path: '/blog/:key',
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Default').default)
                })
            }
        },
        {
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
        },
        {
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
        },
        {
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
        }
    ]
};

pages.forEach((page) => {
    routes.childRoutes.push({
        path: '/' + page,
        getComponent: (nextState, cb) => {
            return require.ensure([], (require) => {
                cb(null, require('./UI/Screens/Default').default)
            })
        }
    })
})

export default {
    routes: routes,
    store: store
}

//
// module.exports = (
//         <Route path="*" component={require('./UI/Screens/Launch').default} />
// );
