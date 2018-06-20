const Framework = require('../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework

const defaultConfig = {
    router: require('./Projects/cryptoreviews/Router').default
}

const sites = {
    'readyblock.one': { router: require('./Projects/readyblockone/Router').default },
    'in5mins.com': { router: require('./Projects/in5mins/Router').default },
    'crypto.in5mins.com': { router: require('./Projects/in5mins/Router').default },
    'bitcoin-btc.review': { router: require('./Projects/cryptoreviews/Router').default },
    // 'litecoin-ltc.review': { router: require('./Projects/cryptoreviews/Router').default },
    // 'aelf-elf.review': { router: require('./Projects/cryptoreviews/Router').default },
    // 'ethereum-eth.review': { router: require('./Projects/cryptoreviews/Router').default }
}

module.exports = function getRouter(uri) {
    // Sanitize the host
    const host = uri.replace('www.', '').replace('.local', '').split(':')[0]
    const config = (host in sites) ? sites[host] : defaultConfig

    console.log('Matched site: ' + host)

    return config.router
}
