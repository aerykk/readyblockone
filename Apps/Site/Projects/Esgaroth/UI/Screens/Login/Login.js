const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, AppWrapper, AppConfig, Platform, T, connect, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import Layout from '../../Layouts/Stoke'
import * as authActions from '../../../Reducers/auth'
import { bindActionCreators } from 'redux'
import { asyncConnect } from 'redux-connect'

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

function mapStateToProps(state) {
    return {
        user: state.auth.user
    }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(authActions, dispatch) }
}

import { isLoaded as isInfoLoaded, load as loadInfo } from '../../../Reducers/info'
import { isLoaded as isAuthLoaded, load as loadAuth, login, logout } from '../../../Reducers/auth'

let asyncItems = [{
    key: 'login',
    promise: ({store: {dispatch, getState}, helpers: {client}}) => {
        const promises = []

        if (!isInfoLoaded(getState())) {
            promises.push(dispatch(loadInfo(client)))
        }
        if (!isAuthLoaded(getState())) {
            promises.push(dispatch(loadAuth()))
        }

        return Promise.all(promises)
    }
}]

export default asyncConnect(asyncItems, mapStateToProps, mapDispatchToProps)(Screen)
