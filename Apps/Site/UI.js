const Framework = require('../../Framework')
const {React, ReactDOM, ReactNative, ReduxAsyncConnect, PropTypes, T, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

class UI extends Component {
    constructor() {
        super()

        this.state = {
        }
    }

    render() {
        const {AppConfig, store, history, routes} = this.props

        return (
            <AppWrapper config={AppConfig}>
                <Provider store={store} key="provider">
                    <Router history={history} routes={routes} render={(props) => {
                        let renderProps = this.props.renderProps || props // The server usually provides renderProps, but the client does not
                        let extraProps = this.props.extraProps || {} // The client usually provides extraProps, but the server does not

                        return <ReduxAsyncConnect {...renderProps} {...extraProps} />
                    }}>
                    </Router>
                </Provider>
            </AppWrapper>
        )
    }
}

export default UI
