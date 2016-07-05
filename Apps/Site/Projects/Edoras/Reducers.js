const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, fetch, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework

import {
    TEST
} from './Actions'

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'Pokelingo',
        isLocal: isLocal,
        copyright: {
            date: '2014-' + new Date().getFullYear(),
            company: 'Pokelingo'
        },
        analytics: {
            GA: {
                id: 'UA-51024992-1'
            }
        },
        support: {
            isEnabled: true
        },
        head: {
            meta: [
                {property: 'og:site_name', content: 'Pokelingo'},
                {property: 'og:image', content: ''},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:title', content: ''},
                {property: 'og:description', content: ''},
                {property: 'og:card', content: 'summary'},
                {property: 'og:site', content: '@pokelingo'},
                {property: 'og:creator', content: '@pokelingo'},
                {property: 'og:image:width', content: '200'},
                {property: 'og:image:height', content: '200'}
            ],
            link: [
                {name: 'description', content: ''},
                {charSet: 'utf-8'},
                {content: 'IE=edge,chrome=1', httpEquiv: 'X-UA-Compatible'},
                {name: 'viewport', content: 'width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0'},
                {rel: 'shortcut icon', href: '/Apps/Site/Projects/Edoras/Assets/Other/ico/favicon.ico'},
                {rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/Apps/Site/Projects/Edoras/Assets/Other/ico/favicon.png'},
                {rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/Apps/Site/Projects/Edoras/Assets/Other/ico/favicon.png'},
                {rel: 'apple-touch-icon-precomposed', href: '/Apps/Site/Projects/Edoras/Assets/Other/ico/favicon.png'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/Edoras/Assets/Other/css/main.css'}
            ],
            script: [
                {src: '/Apps/Site/Vendor/script.min.js'},
            ]
        }
    }
}

const reducers = {
    site
}

import {reducer as reduxAsyncConnect} from 'redux-connect'

export default {
    routing: routerReducer,
    reduxAsyncConnect,
    ...reducers
}
