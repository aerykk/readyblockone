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
        ]
    }
}

function site() {
    const isLocal = typeof window !== 'undefined' && window.location.hostname.indexOf('.local') !== -1

    return {
        title: 'Pokelingo',
        isLocal: isLocal,
        copyright: {
            date: '2014-' + new Date().getFullYear(),
            company: 'Pokelingo'
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
