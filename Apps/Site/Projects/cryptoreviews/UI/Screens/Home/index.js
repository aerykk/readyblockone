const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Markdown from '../../../../../Shared/UI/Components/Markdown'

const supportedTokens = [
    'bitcoin',
    'ethereum',
    'aion'
]

class Screen extends Component {
    static propTypes = {
    }

    constructor() {
        super()

        this.state = {
            page: {
                title: ''
            }
        }
    }

    onPageChange(state) {
        this.setState({
            page: state
        })
    }

    render() {
        const { site, location } = this.props

        let token = site.title.split('.review')[0].split('-')[0] // TODO: solve mutli-words like "bitcoin-cash"

        if (supportedTokens.includes(token)) {
            const content = (
                <Markdown src={'/Apps/Site/Projects/cryptoreviews/Pages/' + token + '/' + (location || 'home') + '.md'} onChange={(state) => this.onPageChange(state)} />
            )

            const page = this.state.page

            const Layout = require('../../Layouts/Token/' + token).default

            return (
                <Layout>
                    {content}
                </Layout>
            )
        } else {
            const Layout = require('../../Layouts/TokenUnavailable').default

            return (
                <Layout>
                    Token not found
                </Layout>
            )
        }

    }
}

function mapStateToProps(state) {
    const { site, routing } = state

    // TODO: Figure out WTF is going on here. Server is string, browser is object
    var location = null
    if (typeof routing.locationBeforeTransitions === 'string') {
        location = routing.locationBeforeTransitions.replace('/', '')
    } else if (typeof routing.locationBeforeTransitions === 'object' && routing.locationBeforeTransitions) {
        location = routing.locationBeforeTransitions.pathname.replace(/^\//, '').replace(/\/$/, '')
    } else if (typeof window !== 'undefined') {
        location = window.location.pathname.replace('/', '')
    }

    return {
        site,
        location
    }
}

export default connect(mapStateToProps)(Screen)
