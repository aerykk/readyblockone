const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, PropTypes, T, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


import styles from './ActionBarSlot.css'

class ActionBarSlot extends Component {
    static propTypes = {
        skillId: T.number,
        iconKey: T.string,
        title: T.string,
        isLeft: T.bool,
        isRight: T.bool
    }

    static defaultProps = {
        skillId: null,
        iconKey: null,
        title: '',
        isLeft: false,
        isRight: false
    }

    render() {
        let type = 'empty'
        if (this.props.isLeft) {
            type = 'left'
        } else if (this.props.isRight) {
            type = 'right'
        }

        const positions = {
            43: '52% 54%',
            74: '34% 33%',
            13: '14% 33%',
            4: '14% 20%',
            46: '14% 0%',
            86: '21% 0%'
        }

        return (
            <View className={styles.container}>
                {this.props.skillId && <View className={styles.overlay} style={{'background-position': positions[this.props.skillId]}} />}
                <View className={styles[type]}></View>
            </View>
        )
    }
}

export default ActionBarSlot
