const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, AppWrapper, AppConfig, connect, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import Layout from '../../Layouts/Stoke'

class Screen extends Component {
    render() {
        return (
            <div>Dashboard</div>
        )
    }
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps)(Screen)
