const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework

import {
    TEST_STUFF
} from './Actions'

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'Eric Muyser',
        isLocal: isLocal,
        copyright: {
            date: '2011-' + new Date().getFullYear(),
            company: 'Eric Muyser | Dreamer'
        },
        analytics: {
            isEnabled: true,
            GA: {
                id: 'UA-16494747-9'
            }
        },
        head: {
            meta: [
                {property: 'og:site_name', content: ''},
                {property: 'og:image', content: ''},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:title', content: ''},
                {property: 'og:description', content: ''},
                {property: 'og:card', content: 'summary'},
                {property: 'og:site', content: '@ericmuyser'},
                {property: 'og:creator', content: '@ericmuyser'},
                {property: 'og:image:width', content: '200'},
                {property: 'og:image:height', content: '200'}
            ],
            link: [
                {name: 'description', content: ''},
                {charSet: 'utf-8'},
                {content: 'IE=edge,chrome=1', httpEquiv: 'X-UA-Compatible'},
                {name: 'viewport', content: 'width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0'},
                {rel: 'shortcut icon', href: '/Apps/Site/Projects/Erebor/Assets/Other/ico/favicon.ico'},
                {rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/Apps/Site/Projects/Erebor/Assets/Other/ico/apple-touch-icon-114x114-precomposed.png'},
                {rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/Apps/Site/Projects/Erebor/Assets/Other/ico/apple-touch-icon-72x72-precomposed.png'},
                {rel: 'apple-touch-icon-precomposed', href: '/Apps/Site/Projects/Erebor/Assets/Other/ico/apple-touch-icon-precomposed.png'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/Erebor/Assets/Other/css/plugins.css'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/Erebor/Assets/Other/css/main.css'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/Erebor/Assets/Other/extra/bootstrap/docs/assets/js/google-code-prettify/prettify.css'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: 'http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: 'http://fonts.googleapis.com/css?family=Ubuntu'}
            ],
            script: [
                {src: 'http://ericmuyser.disqus.com/embed.js'},
                {src: '/Apps/Site/Vendor/script.min.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/jquery.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/js/config.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/js/menu.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/js/main.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/jquery.mousewheel.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/innershiv.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/wheelintent.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/jquery.jscrollpane.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/jquery.address-1.4.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/jquery.scrollTo-1.4.2-min.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/js/bootstrap-dropdown.js'},
                {src: '/Apps/Site/Projects/Erebor/Assets/Other/extra/bootstrap/docs/assets/js/google-code-prettify/prettify.js'}
            ]
        }
    }
}

const reducers = {
    site
}

import {reducer as reduxAsyncConnect} from 'redux-connect'
import {reducer as form} from 'redux-form'

export default {
    routing: routerReducer,
    reduxAsyncConnect,
    ...reducers
}
