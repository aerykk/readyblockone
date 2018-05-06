const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

class Code extends Component {
    constructor() {
        super()

        this.state = {}
    }

    componentWillMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Code.css').toString() : require('./Code.css'), 'shared-', (styles) => { this.setState({styles: styles}) })
    }

    render() {
        return ( (
            <code className="cf-code">
                {this.props.children}
            </code>
        ))
    }
}

module.exports = Code
