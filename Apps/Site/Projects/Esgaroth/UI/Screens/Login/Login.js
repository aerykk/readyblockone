const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, AppWrapper, AppConfig, bindActionCreators, asyncConnect, Platform, T, connect, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import Layout from '../../Layouts/Stoke'

class Screen extends Component {
    static propTypes = {
        user: T.object,
        login: T.func,
        logout: T.func
    }

    render() {
        return (
            <Layout>
                Logged in as: {this.props.user}
            </Layout>
        )
    }
}

import * as authActions from '../../../Reducers/auth'

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

const info = require('../../../Reducers/info')
const auth = require('../../../Reducers/auth')

let asyncItems = [{
    key: 'login',
    promise: ({store: {dispatch, getState}, helpers: {client}}) => {
        const promises = []

        if (!info.isLoaded(getState())) {
            promises.push(dispatch(info.load()))
        }
        if (!auth.isLoaded(getState())) {
            promises.push(dispatch(auth.load()))
        }

        return Promise.all(promises)
    }
}]

export default asyncConnect(asyncItems, mapStateToProps, mapDispatchToProps)(Screen)
