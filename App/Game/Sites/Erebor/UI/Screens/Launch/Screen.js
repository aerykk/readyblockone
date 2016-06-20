const Framework = require('../../../../../../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import DefaultLayout from '../../../../Default/UI/Layouts/Default';

class Screen extends Component {
    render() {
        return (
            <DefaultLayout>
                Test
            </DefaultLayout>
        );
    }
}

export default Screen;
