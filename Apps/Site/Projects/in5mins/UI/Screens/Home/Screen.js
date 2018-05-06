const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, bindActionCreators, asyncConnect, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework
const {Code, CodeBlock} = require('../../../../../Shared/UI/Components')

import Layout from '../../Layouts/Default'
import Markdown from '../../../../../Shared/UI/Components/Markdown'

class Screen extends Component {
    constructor() {
        super()
        this.state = {
            page: {
                title: '',
                body: '',
                items: [],
                options: {}
            }
        }
    }

    onPageChange(state) {
        if (JSON.stringify(this.state.page) === JSON.stringify(state)) {
            return
        }

        this.setState({page: state})
    }

    componentWillMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Screen.css').toString() : require('./Screen.css'), 'stokelayout-', (styles) => { this.setState({styles: styles}) })
    }

    render() {
        const {news} = this.props
        let page = this.props.location.pathname.replace('/', '')

        if (!page) { page = 'home' }

        return (
            <Layout>
                <p>Look at this <Code>inline code</Code>!</p>
                <CodeBlock>And this code block!</CodeBlock>
                <View>Amazing <Link to="/set/10179-1/mf">10179</Link></View>
                {news && news.rows.map((row) => {
                    return (
                        <View>
                            {row.items.map((item) => {
                                return (
                                    <View>
                                        {item.title}
                                        {item.author}
                                        {item.category}
                                        {item.image}
                                        {item.date}
                                    </View>
                                )
                            })}
                        </View>
                    )
                })}
                <Markdown src={"/Apps/Site/Projects/in5mins/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
            </Layout>
        )
    }
}

import * as authActions from '../../../Reducers/auth'

function mapStateToProps(state) {
    return {
        news: state.news.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}


const info = require('../../../Reducers/info')
const auth = require('../../../Reducers/auth')
const news = require('../../../Reducers/news')

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
        if (!news.isLoaded(getState())) {
            promises.push(dispatch(news.load()))
        }

        return Promise.all(promises)
    }
}]

export default asyncConnect(asyncItems, mapStateToProps, mapDispatchToProps)(Screen)
