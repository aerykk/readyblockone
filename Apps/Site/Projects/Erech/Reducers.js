const Framework = require('../../../../Framework');
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework;

import {
    TEST
} from './Actions';

function games() {
    return {
        list: [
            {
                title: 'Trippy Tetra Tiles',
                code: 'ttt',
                icon: 'bookmark',
                timeline: [
                    {
                        title: 'Design',
                        state: 'completed',
                        color: 'red'
                    },
                    {
                        title: 'Prototype',
                        state: 'completed',
                        color: 'orange'
                    },
                    {
                        title: 'Alpha',
                        state: 'completed',
                        color: 'yellow'
                    },
                    {
                        title: 'Beta',
                        state: 'completed',
                        color: 'yellow'
                    },
                    {
                        title: 'Release',
                        state: 'completed',
                        color: 'green'
                    },
                    {
                        title: 'Upgrade',
                        state: 'inprogress',
                        color: 'blue'
                    }
                ]
            },
            {
                title: 'Angels of Ascension',
                code: 'aoa',
                icon: 'lemon',
                timeline: [
                    {
                        title: 'Design',
                        state: 'completed',
                        color: 'red'
                    },
                    {
                        title: 'Prototype',
                        state: 'incompleted',
                        color: 'orange'
                    },
                    {
                        title: 'Alpha',
                        state: 'incompleted',
                        color: 'yellow'
                    },
                    {
                        title: 'Beta',
                        state: 'incompleted',
                        color: 'yellow'
                    },
                    {
                        title: 'Release',
                        state: 'incompleted',
                        color: 'green'
                    },
                    {
                        title: 'Upgrade',
                        state: 'incompleted',
                        color: 'blue'
                    }
                ]
            },
            {
                title: 'Hackatron',
                code: 'hackatron',
                icon: 'screenshot',
                timeline: [
                    {
                        title: 'Design',
                        state: 'completed',
                        color: 'red'
                    },
                    {
                        title: 'Prototype',
                        state: 'completed',
                        color: 'orange'
                    },
                    {
                        title: 'Alpha',
                        state: 'completed',
                        color: 'yellow'
                    },
                    {
                        title: 'Beta',
                        state: 'completed',
                        color: 'yellow'
                    },
                    {
                        title: 'Release',
                        state: 'inprogress',
                        color: 'green'
                    },
                    {
                        title: 'Upgrade',
                        state: 'incompleted',
                        color: 'blue'
                    }
                ]
            },
            {
                title: 'Tile World',
                code: 'tile-world',
                icon: 'bookmark',
                timeline: [
                    {
                        title: 'Design',
                        state: 'completed',
                        color: 'red'
                    },
                    {
                        title: 'Prototype',
                        state: 'incompleted',
                        color: 'orange'
                    },
                    {
                        title: 'Alpha',
                        state: 'incompleted',
                        color: 'yellow'
                    },
                    {
                        title: 'Beta',
                        state: 'incompleted',
                        color: 'yellow'
                    },
                    {
                        title: 'Release',
                        state: 'incompleted',
                        color: 'green'
                    },
                    {
                        title: 'Upgrade',
                        state: 'incompleted',
                        color: 'blue'
                    }
                ]
            },
            {
                title: 'Tilr',
                code: 'tilr',
                icon: 'bookmark',
                timeline: [
                    {
                        title: 'Design',
                        state: 'completed',
                        color: 'red'
                    },
                    {
                        title: 'Prototype',
                        state: 'incompleted',
                        color: 'orange'
                    },
                    {
                        title: 'Alpha',
                        state: 'incompleted',
                        color: 'yellow'
                    },
                    {
                        title: 'Beta',
                        state: 'incompleted',
                        color: 'yellow'
                    },
                    {
                        title: 'Release',
                        state: 'incompleted',
                        color: 'green'
                    },
                    {
                        title: 'Upgrade',
                        state: 'incompleted',
                        color: 'blue'
                    }
                ]
            }
        ]
    }
}

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'Free Games',
        description: 'Free Games',
        isLocal: isLocal,
        copyright: {
            date: '2013-' + new Date().getFullYear(),
            company: 'Free Games'
        }
    }
}

var reducers = {
    games,
    site
};

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

export default rootReducer
