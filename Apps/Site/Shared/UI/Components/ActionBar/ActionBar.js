const Framework = require('../../../../../../Framework')
const {React, ReactDOM, ReactNative, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework


import ActionBarSlot from '../ActionBarSlot';

import styles from './ActionBar.css';

class ActionBar extends Component {
    static propTypes = {
        items: PropTypes.array,
        maxItems: PropTypes.number
    };

    static defaultProps = {
        items: [],
        maxItems: 0
    };

    render() {
        var actions = Array.from(new Array(this.props.maxItems), (x, i) => i);

        this.props.items.forEach((item) => {
            actions[parseInt(item.slotId-1)] = item;
        });

        return (
            <View className={styles.container}>
                {actions.map((action, i) => {
                    if (!action) { action = {}; }
                    return <View className={styles.slot} key={i}><ActionBarSlot {...action} key={i} /></View>;
                })}
            </View>
        );
    }
}

export default ActionBar;
