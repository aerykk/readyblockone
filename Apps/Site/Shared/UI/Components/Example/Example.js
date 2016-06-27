const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


import styles from './Example.css'

class Example extends Component {
    toString() {'[Example]'}

    static propTypes = {
        isDebug: T.bool,
    }

    static defaultProps = {
        isDebug: false,
    }

    render() {
        return <View className={styles.container}>example</View>
    }
}

export default Example
