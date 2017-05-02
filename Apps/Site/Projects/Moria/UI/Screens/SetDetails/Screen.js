const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, bindActionCreators, asyncConnect, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Layout from '../../Layouts/Default'

class Screen extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        const {setData} = this.props
        const {id, title, setNumber, setNumberVariant, data} = setData

        return (
            <Layout>
                <h1>{title} ({setNumber}-{setNumberVariant})</h1>
                <Link href={"/sets/" + id + "/edit"}>Edit</Link>

                <View>
                    ID: {id}<br />
                    Title: {title}<br />
                    {Object.keys(data).map((key) => {
                        const item1 = data[key]
                        if (typeof item1 === 'object') {
                            return Object.keys(item1).map((key2) => {
                                const item2 = item1[key2]
                                if (typeof item2 === 'object') {
                                    return Object.keys(item2).map((key3) => {
                                        const item3 = item2[key3]
                                        if (key3 === 'link') {
                                            return <View><a href={item3}>GO TO BUY PAGE</a></View>
                                        }
                                        return <View>{key3}: {item3}</View>
                                    })
                                } else {
                                    return <View>{key2}: {item2}</View>
                                }
                            })
                        } else {
                            return <View>{key}: {item1}</View>
                        }
                    })}
                </View>
            </Layout>
        )
    }
}

import * as authActions from '../../../Reducers/auth'

function mapStateToProps(state) {
    return {
        setData: state.set.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}


const info = require('../../../Reducers/info')
const auth = require('../../../Reducers/auth')
const set = require('../../../Reducers/set')

let asyncItems = [{
    key: 'page',
    promise: ({store: {dispatch, getState}, helpers: {client}}) => {
        const promises = []

        if (!info.isLoaded(getState())) {
            promises.push(dispatch(info.load()))
        }
        if (!auth.isLoaded(getState())) {
            promises.push(dispatch(auth.load()))
        }
        if (!set.isLoaded(getState())) {
            promises.push(dispatch(set.load()))
        }

        return Promise.all(promises)
    }
}]

export default asyncConnect(asyncItems, mapStateToProps, mapDispatchToProps)(Screen)
