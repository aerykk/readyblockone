const Framework = require('../../Framework');
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework;

// Setup sites

const defaultConfig = {
}

const sites = {
    'in5mins.com': {
        router: require('./Projects/in5mins/Router').default
    },
    'readyblock.one': {
        router: require('./Projects/readyblockone/Router').default
    },
    'litecoin-ltc.review': {
        router: require('./Projects/cryptoreviews/Router').default
    },
    'aelf-elf.review': {
        router: require('./Projects/cryptoreviews/Router').default
    },
};

var getUrlParameters = function(search) {
    var a = search.substr(1).split('&');

    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
};

//var queries = getUrlParameters(window.location.search);

module.exports = function getRouter(uri) {
    // Sanitize the host
    const host = uri.replace('www.', '').replace('.local', '').split(':')[0];
    const config = (host in sites) ? sites[host] : defaultConfig;

    console.log('Matched site: ' + host)

    return config.router;
}
