const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, AppWrapper, AppConfig, Platform, connect, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import Layout from '../../Layouts/Stoke'
import * as authActions from '../../../Reducers/auth'

class Screen extends Component {
    render() {
        return (
            <div>Logged in as: {this.props.user}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

export default connect(mapStateToProps, authActions)(Screen)
