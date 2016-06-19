const Framework = require('../../../../../../Framework');
const {React, ReactDOM, PropTypes, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import { Link } from 'react-router';

class Layout extends Component {
    static propTypes = {
        test: PropTypes.number
    };

    static defaultProps = {
        test: 5
    };

    constructor() {
        super();

        this.state = {};
    }
    componentWillMount() {
    }
    render() {
        return (
            <View>
            </View>
        );
    }
}

export default Layout;
