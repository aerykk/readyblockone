const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


let localStorage = null

if (Framework.Platform.Env.isServer) {
    localStorage = {token: 'nodejs'}
} else {
    localStorage = typeof window !== 'undefined' ? window.localStorage : null
}

module.exports = {
    login(email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        pretendRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },

    getToken: function () {
        return localStorage.token
    },

    logout: function (cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn: function () {
        return !!localStorage.token
    },

    onChange: function () {}
}

function pretendRequest(email, pass, cb) {
    setTimeout(() => {
        if (email === 'john@doe.com' && pass === 'pass') {
            cb({
                authenticated: true,
                token: Math.random().toString(36).substring(7)
            })
        } else {
            cb({ authenticated: false })
        }
    }, 0)
}
