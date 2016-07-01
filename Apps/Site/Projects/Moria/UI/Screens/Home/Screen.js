const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework
const {Code, CodeBlock} = require('../../../../../Shared/UI/Components')

import Layout from '../../Layouts/Default'
import Markdown from '../../../../../Shared/UI/Components/Markdown'

class Screen extends Component {
    constructor() {
        super()
        this.state = {
            page: {
                title: '',
                body: '',
                items: [],
                options: {}
            }
        }
    }

    onPageChange(state) {
        if (JSON.stringify(this.state.page) === JSON.stringify(state)) {
            return
        }

        this.setState({page: state})
    }

    render() {
        var page = this.props.location.pathname.replace('/', '')

        if (!page) { page = 'home' }

        return (
            <Layout>
                <p>Look at this <Code>inline code</Code>!</p>
                <CodeBlock>And this code block!</CodeBlock>
                <Markdown src={"/Apps/Site/Projects/Moria/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
            </Layout>
        )
    }
}

export default Screen
