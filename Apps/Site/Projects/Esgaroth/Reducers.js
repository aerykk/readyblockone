const Framework = require('../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, Provider, syncHistoryWithStore, routerReducer, combineReducers, renderToString} = Framework

import {
    SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS
} from './Actions'

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}


function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type) {
    case SELECT_SUBREDDIT:
        return action.subreddit
    default:
        return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subreddit]: posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

function game() {
    return {
        players: [],
        enemy: {
            name: 'sss'
        }
    }
}


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
        title: 'Stoke Games',
        isLocal: isLocal,
        copyright: {
            date: '2013-' + new Date().getFullYear(),
            company: 'Stoke Games'
        },
        analytics: {
            GA: {
                id: 'UA-37708346-1'
            }
        },
        support: {
            isEnabled: true
        },
        styles: {
            body: ''
        },
        head: {
            meta: [
                {property: 'og:site_name', content: 'Stoke Games'},
                {property: 'og:image', content: ''},
                {property: 'og:locale', content: 'en_US'},
                {property: 'og:title', content: ''},
                {property: 'og:description', content: ''},
                {property: 'og:card', content: 'summary'},
                {property: 'og:site', content: '@stokegames'},
                {property: 'og:creator', content: '@stokegames'},
                {property: 'og:image:width', content: '200'},
                {property: 'og:image:height', content: '200'}
            ],
            link: [
                {name: 'description', content: 'Stoke Games, bringing you games worth being stoked about'},
                {charSet: 'utf-8'},
                {content: 'IE=edge,chrome=1', httpEquiv: 'X-UA-Compatible'},
                {name: 'viewport', content: 'width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0'},
                {rel: 'shortcut icon', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.ico'},
                {rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.png'},
                {rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.png'},
                {rel: 'apple-touch-icon-precomposed', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/ico/favicon.png'},
                {rel: 'stylesheet', type: 'text/css', media: 'all', href: '/Apps/Site/Projects/Esgaroth/Assets/Other/app.css'}
            ],
            script: [
            ]
        }
    }
}

const reducers = {
    postsBySubreddit,
    selectedSubreddit,
    games,
    game,
    site
}

import {reducer as reduxAsyncConnect} from 'redux-connect'
import {reducer as form} from 'redux-form'

export default {
    routing: routerReducer,
    reduxAsyncConnect,
    ...reducers
}
