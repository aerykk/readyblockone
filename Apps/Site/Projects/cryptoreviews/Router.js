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
                    <a href="http://readyblock.one.local:10020/">Go to Ready Block One</a>
                </li>
                <li>
                    <a href="http://litecoin-ltc.review.local:10010/">Go to Litecoin Review</a>
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
            <View>
                <HotKeys handlers={handlers} keyMap={map}>
                    <View>
                        {this.props.children}
                        {isLocal && <DevTools />}
                        {isLocal && this.state.toolbarActive && <Toolbar />}
                    </View>
                </HotKeys>
            </View>
        )
    }
}


const routes = {
    component: App,
    childRoutes: [
        {
            path: '/',
                getComponent: (nextState, cb) => {
                return require.ensure([], (require) => {
                    cb(null, require('./UI/Screens/Home').default)
                })
            }
        },
        {path: '*', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Home').default) }) } },
    ]
}

export default {
    routes: routes,
    store: store,
    middleware: middleware,
    reducers: reducers
}
