import React from 'react';
import { View } from '../../Vendor/react-universal';

var routes = require('../routes');


var UI = React.createClass({
    render: function() {
        return (
            <View style={styles.container}>
                {routes}
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
