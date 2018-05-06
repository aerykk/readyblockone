const Framework = require('../../Framework')
const {React, ReactDOM, ReactNative, ReduxAsyncConnect, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework
import { Switch } from 'react-router'

class UI extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {
        const {store, history, routes} = this.props

        return (
            <Provider store={store} key="provider">
                <Switch>
                    {routes.map(route => (
                        <Route {...route} />
                    ))}
                </Switch>
            </Provider>
        )
    }
}

export default UI
