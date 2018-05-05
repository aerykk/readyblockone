const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework

import {
    TEST_STUFF
} from './Actions'

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'Brick Brotherhood',
        description: 'Bricks rock',
        isLocal: isLocal,
        copyright: {
            date: '2015-' + new Date().getFullYear(),
            company: 'Brick Brotherhood'
        },
        analytics: {
            GA: {
                id: ''
            }
        },
        head: {
            meta: [
                {name: 'description', content: ''},
                {charset: 'utf-8'},
                {property: 'og:site_name', content: ''},
                {property: 'og:image', content: ''},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:title', content: ''},
                {property: 'og:description', content: ''},
                {property: 'og:card', content: 'summary'},
                {property: 'og:site', content: '@brickbrotherhood'},
                {property: 'og:creator', content: '@brickbrotherhood'},
                {property: 'og:image:width', content: '200'},
                {property: 'og:image:height', content: '200'}
            ]
        }
    }
}

import {reducer as reduxAsyncConnect} from 'redux-connect'
import {reducer as form} from 'redux-form'
import {reducer as auth} from './Reducers/auth'
import {reducer as info} from './Reducers/info'
import {reducer as news} from './Reducers/news'

const reducers = {
    site,
    auth,
    info,
    news
}

export default {
    routing: routerReducer,
    reduxAsyncConnect,
    ...reducers
}
