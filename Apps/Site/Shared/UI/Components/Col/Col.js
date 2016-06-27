const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


class Col extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        return (
            <View style={Object.assign({}, styles.col, { flex: parseInt(this.props.span) }, this.props.style)}>{this.props.children}</View>
        );
    }
}

const styles = StyleSheet.create({
    col: {
    }
});

export default Col;