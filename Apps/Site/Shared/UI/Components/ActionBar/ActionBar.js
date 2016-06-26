const Framework = require('../../../../../../../Framework');
const {React, ReactDOM, PropTypes, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import ActionBarSlot from '../ActionBarSlot';

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
            <View>
                {actions.map((action, i) => {
                    if (!action) { action = {}; }
                    return <View key={i}><ActionBarSlot {...action} key={i} /></View>;
                })}
            </View>
        );
    }
}

export default ActionBar;
