const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

export default class Product extends Component {
    render() {
        const { price, quantity, title } = this.props
        return <div> {title} - &#36;{price} {quantity ? `x ${quantity}` : null} </div>
    }
}

Product.propTypes = {
    price: T.number,
    quantity: T.number,
    title: T.string
}
