import { combineReducers } from 'redux';

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import {
    SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT,
    REQUEST_POSTS, RECEIVE_POSTS
} from './Actions';

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
                    },
                ]
            },
            {
                title: 'Angels of Ascension',
                code: 'aoa',
                icon: 'lemon'
            },
            {
                title: 'Hackatron',
                code: 'hackatron',
                icon: 'screenshot'
            },
            {
                title: 'Tile World',
                code: 'tile-world',
                icon: 'bookmark'
            },
            {
                title: 'Tilr',
                code: 'tilr',
                icon: 'bookmark'
            }
        ]
    }
}

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'Stoke Games',
        description: 'Stoke Games, bringing you games worth being stoked about',
        isLocal: isLocal,
        copyright: {
            date: '2013-' + new Date().getFullYear(),
            company: 'Stoke Games'
        }
    }
}

var reducers = {
    postsBySubreddit,
    selectedSubreddit,
    games,
    game,
    site
};

const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

export default rootReducer
