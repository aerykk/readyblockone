const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Layout from '../../Layouts/Default'
import Markdown from '../../../../../Shared/UI/Components/Markdown'

class Screen extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <Layout breadcrumb={breadcrumb}>
                Test
            </Layout>
        )
    }
}

export default Screen
