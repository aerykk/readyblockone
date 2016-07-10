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
                <View id="game"></View>

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
        {path: '/', getComponent: (nextState, cb) => { return require.ensure([], (require) => { cb(null, require('./UI/Screens/Home').default) }) } },
    ]
}


////////////// PHASER GAME

if (Framework.Platform.Env.isBrowser) {
    window.Hackatron = {}
    window.Hackatron.ready = false
    window.Hackatron.screen = 'Menu'

    require('./Game/States/Boot')
    require('./Game/States/Preload')
    require('./Game/States/Menu')
    require('./Game/States/Game')

    if (Utils.env.os.mobile) {
        window.Hackatron.GAME_WIDTH = 256 // Game originally designed for 512px
        window.Hackatron.GAME_HEIGHT = 256 * (window.innerHeight / window.innerWidth) // Game originally designed for 512px
    } else {
        window.Hackatron.GAME_WIDTH = 640 // Game originally designed for 640px
        window.Hackatron.GAME_HEIGHT = 640 // Game originally designed for 640px
    }

    // Game Constants
    window.Hackatron.UI_WIDTH = window.Hackatron.GAME_WIDTH // UI originally designed for 700px
    window.Hackatron.UI_HEIGHT = window.Hackatron.GAME_HEIGHT // UI originally designed for 700px
    window.Hackatron.TILE_COUNT_HORIZONTAL = 40
    window.Hackatron.TILE_COUNT_VERTICAL = 40
    window.Hackatron.GAME_TIME = 5 * 60
    window.Hackatron.DEFAULT_PLAYER_SPEED = 200
    window.Hackatron.POWERUP_SPAWN_INTERVAL = 5000
    window.Hackatron.UPDATE_INTERVAL = 100

    var gameContainer = document.getElementById('game')
    var uiContainer = document.getElementById('ui')

    window.Hackatron.getWidthGameScale = function() {
        return (window.innerWidth / window.Hackatron.GAME_WIDTH).toFixed(2)
    }

    window.Hackatron.getHeightGameScale = function() {
        return (window.innerHeight / window.Hackatron.GAME_HEIGHT).toFixed(2)
    }

    window.Hackatron.getWidthRatioScale = function() {
        return window.innerHeight > window.innerWidth ? 1 : (window.innerHeight / window.innerWidth).toFixed(2)
    }

    window.Hackatron.getHeightRatioScale = function() {
        return window.innerHeight > window.innerWidth ? (window.innerWidth / window.innerHeight).toFixed(2) : 1
    }

    // Resize UI
    window.onresize = function() {
        var smallest = window.innerWidth < window.innerHeight ? window.innerWidth / window.Hackatron.UI_WIDTH : window.innerHeight / window.Hackatron.UI_HEIGHT
        uiContainer.style.zoom = smallest
    }

    // Load Game
    window.Hackatron.debug = window.location.href.indexOf('localhost') !== -1


    window.onresize()



    window.Hackatron.fitToWindow = function() {
        if (window.Hackatron.game) {
            window.Hackatron.game.engine.canvas.style['width'] = '100%'
            window.Hackatron.game.engine.canvas.style['height'] = '100%'
        }
        //this.game.canvas.style['transform'] = 'perspective(900px) rotateX(15deg) rotate(-3deg)'
        document.getElementById('game').style['width'] = Hackatron.getWidthRatioScale() * 100 + '%'
        document.getElementById('game').style['height'] = Hackatron.getHeightRatioScale() * 100 + '%'
        if (Platform.Env.isMobile) {
            document.body.style['background-size'] = 'contain'
        }
        //document.getElementById('ui').style['transform'] = 'perspective(1000px) rotateX(10deg) rotate(-2deg)'
        window.onresize()
    }

    window.Hackatron.loader = new Phaser.Game(window.Hackatron.GAME_WIDTH, window.Hackatron.GAME_HEIGHT, Phaser.AUTO, gameContainer, null, true)

    window.Hackatron.loader.state.add('Boot', window.Hackatron.Boot)
    window.Hackatron.loader.state.add('Preload', window.Hackatron.Preload)
    window.Hackatron.loader.state.add('Menu', window.Hackatron.Menu)
    window.Hackatron.loader.state.add('Game', window.Hackatron.Game)
}



export default {
    routes: routes,
    store: store,
    middleware: middleware,
    reducers: reducers
}
