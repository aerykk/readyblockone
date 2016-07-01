const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

console.log(require('path').join(__dirname))
class Code extends React.Component {
    componentDidMount() {
        Framework.findStyles(__dirname + '/Code.css', (styles) => { this.setState({styles: styles}) })
    }

    render() {
        return Framework.wrapStyles(
            <code className="cf-code">
                {this.props.children}
            </code>
        )
    }
}

module.exports = Code
