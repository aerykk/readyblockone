const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import DefaultLayout from '../../Layouts/Default'
import Markdown from '../../Components/Markdown'

class Screen extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <DefaultLayout breadcrumb={breadcrumb}>
                <div className="box">
                    <div className="tab-header">
                    </div>
                    <div className="padded">
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}

export default Screen
