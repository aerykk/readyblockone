const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework

import {
    TEST_STUFF
} from './Actions'

function site(host) {
    return function reducer() {
        const isLocal = host.indexOf('.local') !== -1

        return {
            title: 'Ready Block One',
            isLocal: isLocal,
            copyright: {
                date: '2017-' + new Date().getFullYear(),
                company: 'Ready Block One'
            },
            analytics: {
                isEnabled: true,
                GA: {
                    id: 'UA-118765358-1'
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
                    {property: 'og:site', content: '@readyblockone'},
                    {property: 'og:creator', content: '@readyblockone'},
                    {property: 'og:image:width', content: '200'},
                    {property: 'og:image:height', content: '200'}
                ],
                link: [
                    {name: 'description', content: ''},
                    {charSet: 'utf-8'},
                    {content: 'IE=edge,chrome=1', httpEquiv: 'X-UA-Compatible'},
                    {name: 'viewport', content: 'width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0'},
                    { rel: 'shortcut icon', href: '/Apps/Site/Projects/readyblockone/Assets/Other/icon/favicon-32x32.png' },
                    { rel: 'apple-touch-icon-precomposed', href: '/Apps/Site/Projects/readyblockone/Assets/Other/icon/favicon-32x32.png' },
                    { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/Apps/Site/Projects/readyblockone/Assets/Other/icon/apple-touch-icon-72x72.png' },
                    { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/Apps/Site/Projects/readyblockone/Assets/Other/icon/apple-touch-icon-114x114.png' },
                    { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '/Apps/Site/Projects/readyblockone/Assets/Other/icon/apple-touch-icon-144x144.png' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/themify-icons.css'},
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/cryptocoins.css'},
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/cryptocoins-colors.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/bootstrap-reboot.min.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/bootstrap-grid.min.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/owl.carousel.min.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/magnific-popup.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/readyblockone/Assets/Other/css/main-color1.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600%7CRoboto:400,400i,500,700'}
                ],
                script: [
                    {src: '/Apps/Site/Vendor/script.min.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/jquery-3.2.1.slim.min.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/bootstrap.bundle.min.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/owl.carousel.min.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/smooth-scroll.min.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/jquery.magnific-popup.min.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/particles.min.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/particles-app.js'},
                    { src: '/Apps/Site/Projects/readyblockone/Assets/Other/js/main.js'}
                ]
            }
        }
    }
}

import {reducer as reduxAsyncConnect} from 'redux-connect'
import {reducer as form} from 'redux-form'

export default function (host) {
    return {
        routing: routerReducer,
        reduxAsyncConnect,
        site: site(host)
    }
}
