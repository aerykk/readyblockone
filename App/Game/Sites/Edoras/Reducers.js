import { combineReducers } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import {
    TEST
} from './Actions'

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
        description: '',
        isLocal: isLocal,
        copyright: {
            date: '2014-' + new Date().getFullYear(),
            company: 'Pokelingo'
        }
    }
}

var reducers = {
    games,
    game,
    site
}

export default {
    ...reducers,
    routing: routerReducer
}
