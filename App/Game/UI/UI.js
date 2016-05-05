import React from 'react';

import LaunchScreen from './Screens/LaunchScreen';

window.UI_state = {
    screenKey: 'start'
};

var UI = React.createClass({
    getInitialState: function() {
        window.UI_controller = this;
        return window.UI_state;
    },
    render: function() {
        return (
            <View style={styles.container}>
                {this.state.screenKey === 'start' && <LaunchScreen />}
            </View>
        );
    }
});

var styles = {
    container: {
        position: 'relative',
        top: 0,
        left: 0
    }
};

export default UI;
