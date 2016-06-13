const Framework = require('../../../../../../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import DefaultLayout from '../../Layouts/Default';
import Markdown from '../../Components/Markdown';

class Screen extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <DefaultLayout breadcrumb={breadcrumb}>
                <div className="box">
                    <div className="tab-header">
                    </div>
                    <div className="padded">
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default Screen;
