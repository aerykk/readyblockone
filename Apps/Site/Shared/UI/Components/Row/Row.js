const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


class Row extends Component {
    static propTypes = {
        children: T.node.isRequired
    }

    render() {
        return (
            <View>
                {this.props.children}
            </View>
        )
    }
}

export default Row
