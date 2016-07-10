const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework

import {
    TEST_STUFF
} from './Actions'

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'Stoke Games',
        isLocal: isLocal,
        copyright: {
            date: '2013-' + new Date().getFullYear(),
            company: 'Stoke Games'
        },
        analytics: {
            GA: {
                id: 'UA-37708346-1'
            }
        },
        support: {
            isEnabled: true
        },
        styles: {
            body: ''
        },
        head: {
            meta: [
                {property: 'og:site_name', content: 'Stoke Games'},
                {property: 'og:image', content: ''},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:title', content: ''},
                {property: 'og:description', content: ''},
                {property: 'og:card', content: 'summary'},
                {property: 'og:site', content: '@stokegames'},
                {property: 'og:creator', content: '@stokegames'},
                {property: 'og:image:width', content: '200'},
                {property: 'og:image:height', content: '200'}
            ],
            link: [
                {name: 'description', content: 'Stoke Games, bringing you games worth being stoked about'},
                {charSet: 'utf-8'},
                {content: 'IE=edge,chrome=1', httpEquiv: 'X-UA-Compatible'},
                {name: 'viewport', content: 'width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0'},
                {rel: 'shortcut icon', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.ico'},
                {rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.png'},
                {rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.png'},
                {rel: 'apple-touch-icon-precomposed', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.png'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/app.css'}
            ],
            script: [
                {src: '/Apps/Site/Projects/Alcyone/Assets/Vendor/easystar-0.1.7.min.js'},
                {src: '/Apps/Site/Projects/Alcyone/Assets/Vendor/pixi.js'},
                {src: '/Apps/Site/Projects/Alcyone/Assets/Vendor/phaser-arcade-physics.js'},
                {src: '/Apps/Site/Projects/Alcyone/Assets/Vendor/phaser-tiled.js'},
                {src: '/Apps/Site/Projects/Alcyone/Assets/Vendor/phaser-debug.js'},
                {src: '/Apps/Site/Projects/Alcyone/Assets/Vendor/phaser-camera-shake.js'},
                {src: '/Apps/Site/Projects/Alcyone/Assets/main.js'}
            ]
        }
    }
}


import {reducer as reduxAsyncConnect} from 'redux-connect'

const reducers = {
    site
}

export default {
    routing: routerReducer,
    reduxAsyncConnect,
    ...reducers
}
