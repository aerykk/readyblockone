const Framework = require('../../../../Framework');
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework;

import {
    TEST_STUFF
} from './Actions';

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'My site',
        description: 'Stuff and stuff',
        isLocal: isLocal,
        copyright: {
            date: '2013-' + new Date().getFullYear(),
            company: 'My site'
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

var reducers = {
    site
};

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

export default rootReducer
