const Framework = require('../../../../../../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import StokeLayout from '../../Layouts/Stoke';
import Markdown from '../../../../Default/UI/Components/Markdown';

import { connect } from 'react-redux'

class Screen extends Component {

    render() {

        return (
            <div>PageOne</div>
        );
    }
}

Screen.propTypes = {
};

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Screen);
