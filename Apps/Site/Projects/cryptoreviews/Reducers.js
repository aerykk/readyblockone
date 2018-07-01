const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework

import {
    TEST_STUFF
} from './Actions'

function site(host) {
    return function reducer() {
        let isLocal = host.indexOf('.local') !== -1
        let key = host.split('.review')[0].split('-')[0]
        let symbol = host.split('.review')[0].split('-')[1]

        if (symbol === 'token')
            symbol = key

        return {
            title: host.split('.review')[0],
            isLocal: isLocal,
            copyright: {
                date: '2017-' + new Date().getFullYear(),
                company: 'Crypto Reviews | Ready Block One'
            },
            analytics: {
                isEnabled: true,
                GA: {
                    id: 'UA-118765145-1'
                }
            },
            head: {
                meta: [
                    { property: 'og:site_name', content: '' },
                    { property: 'og:image', content: '' },
                    { property: 'og:locale', content: 'en_US' },
                    { property: 'og:title', content: '' },
                    { property: 'og:description', content: '' },
                    { property: 'og:card', content: 'summary' },
                    { property: 'og:site', content: '@readyblockone' },
                    { property: 'og:creator', content: '@readyblockone' },
                    { property: 'og:image:width', content: '200' },
                    { property: 'og:image:height', content: '200' }
                ],
                link: [
                    { name: 'description', content: '' },
                    { charSet: 'utf-8' },
                    { content: 'IE=edge,chrome=1', httpEquiv: 'X-UA-Compatible' },
                    { name: 'viewport', content: 'width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0' },
                    { rel: 'shortcut icon', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/images/favicon.ico' },
                    { rel: 'apple-touch-icon-precomposed', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/images/favicon.ico' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/bootstrap.min.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/magnific-popup/magnific-popup.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/owl-carousel/owl.carousel.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/animate.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/font-awesome.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/ionicons.min.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/flaticon.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/shop.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/revslider/css/settings.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/style.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/responsive.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/cryptoreviews/Assets/Other/css/custom.css' },
                    { rel: 'stylesheet', type: 'text/css', media: 'all', href: 'https://fonts.googleapis.com/css?family=PT+Sans&amp;Ubuntu:400,500,700' }
                ],
                script: [
                    { src: '/Apps/Site/Vendor/script.min.js' },
                    { src: '/Apps/Site/Projects/cryptoreviews/Assets/Other/js/jquery-min.js' },
                    { src: '/Apps/Site/Projects/cryptoreviews/Assets/Other/js/popper.min.js' },
                    { src: '/Apps/Site/Projects/cryptoreviews/Assets/Other/js/bootstrap.min.js ' },
                    { src: '/Apps/Site/Projects/cryptoreviews/Assets/Other/js/widget.js' },
                    { src: '/Apps/Site/Projects/cryptoreviews/Assets/Other/js/all-plugins.js' },
                    { src: '/Apps/Site/Projects/cryptoreviews/Assets/Other/js/particles.js' },
                    { src: '/Apps/Site/Projects/cryptoreviews/Assets/Other/js/custom.js' }
                ]
            }
        }
    }
}

import {reducer as reduxAsyncConnect} from 'redux-connect'
import {reducer as form} from 'redux-form'

export default function(host) {
    return {
        routing: routerReducer,
        reduxAsyncConnect,
        site: site(host)
    }
}
