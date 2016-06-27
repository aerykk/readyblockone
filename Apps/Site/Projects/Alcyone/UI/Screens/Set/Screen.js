const Framework = require('../../../../../../../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import DefaultLayout from '../../Layouts/Default';
import Markdown from '../../../../../Shared/UI/Components/Markdown';

class Screen extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <DefaultLayout breadcrumb={breadcrumb}>
                Test
            </DefaultLayout>
        );
    }
}

export default Screen;
