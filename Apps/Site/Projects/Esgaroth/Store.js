const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework
import { compose } from 'redux'
const loggerMiddleware = createLogger()

import DevTools from '../../Shared/UI/Components/DevTools'
const { persistState } = require('redux-devtools')

export default {
    configure: (reducers, middleware, data) => {
        let otherMiddleware = []

        if (Platform.Env.isDevelopment) {
            otherMiddleware.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument())
            otherMiddleware.push(persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)))
        }

        let createFinalStore = compose(
            applyMiddleware(
                ...middleware,
                thunkMiddleware,
                loggerMiddleware
            ),
            ...otherMiddleware
        )(createStore)

        const store = createFinalStore(combineReducers(reducers), data)

        return store
    }
}
