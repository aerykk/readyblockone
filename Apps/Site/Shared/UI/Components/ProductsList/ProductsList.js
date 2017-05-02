const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


export default class ProductsList extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

ProductsList.propTypes = {
    children: T.node,
    title: T.string.isRequired
}
