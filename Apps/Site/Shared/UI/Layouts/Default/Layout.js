const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

class Layout extends Component {
    static propTypes = {
        test: T.number
    }

    static defaultProps = {
        test: 5
    }

    constructor() {
        super()

        this.state = {}
    }

    componentWillMount() {
    }

    render() {
        return (
            <View>
            </View>
        )
    }
}

export default Layout
