const Framework = require('../../Framework');
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, renderToString} = Framework;

// Setup sites

const defaultConfig = {
}

const sites = {
    'orionui.com': {},
    'nextgenengine.com': {},
    'vayard.com': {},
    'hackatron.rocks':  {
        router: require('./Projects/Alcyone/Router').default
    },
    'muyser.com': {},
    'ericmuyser.com': {
        router: require('./Projects/Erebor/Router').default
    },
    'staging.ericmuyser.com': {
        router: require('./Projects/Erebor/Router').default
    },
    'stokegames.com': {
        router: require('./Projects/Esgaroth/Router').default
    },
    'free.stokegames.com': {
        router: require('./Projects/Erech/Router').default
    },
    'acejapanese.com': {},
    'acekorean.com': {},
    'aceitalian.com': {},
    'acefrench.com': {},
    'aceportuguese.com': {},
    'acerussian.com': {},
    'acelearners.com': {},
    'volunteering.mobify.com': {
        router: require('./Projects/Lorien/Router').default
    },
    'pokelingo.com': {
        router: require('./Projects/Edoras/Router').default
    },
    'brickbrotherhood.com': {
        router: require('./Projects/Moria/Router').default
    },
    'amazebricks.com': {},
    'realmofdiablo.com': {},
    'sacredpoker.com': {},
    'secretoflumaria.com': {},
    'singlefacestudios.com': {},
    'tilearena.rocks': {},
    'tileworld-game.com': {},
    'tilr-game.com': {},
    'angelsofascension.com': {},
    'connecting.live': {},
    'manhood-game.com': {},
    'egic.ca': {},
    'kannyarou.com': {}
};

/* Sites

stokegames.com
    pages
        about
        contact
        privacy
        games
            games/:code


pokelingo.com
    pages
        about
        contact
        privacy

egic.ca
    pages
        about
        contact
        privacy
        courses

connecting.live
    pages
        about
        contact
        privacy
        locations


brickbrotherhood.com
    sets
        set
            id
            title
            pieces
    pages
        about
        contact
        privacy
        sets
            sets/:setId
            sets/:setId/buy
            sets/:
    user
        id
        watchedSets
        ownedSets



hackatron.com
    pages
        about
        contact
        privacy
        credits
    game
        players
            player
                character
                    worldPosition
                        x
                        y
                    sprite
                        x
                        y
        player -> players[i]
        powerups
            type
            sprite
                x
                y
        enemy
            character
                worldPosition
                    x
                    y
                sprite
                    x
                    y

*/


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
