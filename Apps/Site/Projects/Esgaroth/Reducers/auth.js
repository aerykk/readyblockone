const LOAD = 'esgaroth/auth/LOAD'
const LOAD_SUCCESS = 'esgaroth/auth/LOAD_SUCCESS'
const LOAD_FAIL = 'esgaroth/auth/LOAD_FAIL'
const LOGIN = 'esgaroth/auth/LOGIN'
const LOGIN_SUCCESS = 'esgaroth/auth/LOGIN_SUCCESS'
const LOGIN_FAIL = 'esgaroth/auth/LOGIN_FAIL'
const LOGOUT = 'esgaroth/auth/LOGOUT'
const LOGOUT_SUCCESS = 'esgaroth/auth/LOGOUT_SUCCESS'
const LOGOUT_FAIL = 'esgaroth/auth/LOGOUT_FAIL'

const initialState = {
    loaded: false
}

export function reducer(state = initialState, action = {}) {console.log('zzzz', action.type)
    switch (action.type) {
        case LOAD:
            return {
                ...state,
                loading: true
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: action.result
            }
        case LOAD_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            }
        case LOGIN:
            return {
                ...state,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                user: action.result
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                user: null,
                loginError: action.error
            }
        case LOGOUT:
            return {
                ...state,
                loggingOut: true
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                loggingOut: false,
                user: null
            }
        case LOGOUT_FAIL:
            return {
                ...state,
                loggingOut: false,
                logoutError: action.error
            }
        default:
            return state
    }
}

export function isLoaded(globalState) {
    return globalState.auth && globalState.auth.loaded
}

export function load() {
    return {
        types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
        promise: (client) => client.get('/loadAuth')
    }
}

export function login(name) {
    return {
        types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
        promise: (client) => client.post('/login', {
            data: {
                name: name
            }
        })
    }
}

export function logout() {
    return {
        types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
        promise: (client) => client.get('/logout')
    }
}
