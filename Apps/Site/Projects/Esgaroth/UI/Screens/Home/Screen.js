const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, dispatch, asyncConnect, bindActionCreators, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Layout from '../../Layouts/Stoke'
import Markdown from '../../../../../Shared/UI/Components/Markdown'

import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../../../Actions'

class Screen extends Component {
    static propTypes = {
        selectedSubreddit: T.string.isRequired,
        posts: T.array.isRequired,
        isFetching: T.bool.isRequired,
        lastUpdated: T.number,
        dispatch: T.func.isRequired
    }

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
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }
componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
}

componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
        const { dispatch, selectedSubreddit } = nextProps
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
}

handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
}

handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
}

    onPageChange(state) {
        if (JSON.stringify(this.state.page) === JSON.stringify(state)) {
            return
        }

        this.setState({page: state})
    }

    render() {
        let page = this.props.location

        if (!page) { page = 'home' }

        let breadcrumb = null

        this.state.page.items.forEach(function(item) {
            if (item.title === 'Breadcrumb') {
                breadcrumb = item.body
            }
        })

        // TODO: Remove this hack
        this.state.page.options.slim = (page === 'home')

        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props

        return (
            <Layout breadcrumb={breadcrumb}>
                {!this.state.page.options.slim && (
                    <View className="box">
                        <View className="tab-header">
                            {this.state.page.title}
                        </View>
                        <View className="padded">
                            <Markdown src={"/Apps/Site/Projects/Esgaroth/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                        </View>
                    </View>
                )}
                {this.state.page.options.slim && (
                    <Markdown src={"/Apps/Site/Projects/Esgaroth/Pages/" + page + ".md"} onChange={(state) => this.onPageChange(state)} />
                )}
                <View>
                    <p>
                        {lastUpdated &&
                            <span>
                                Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                                {' '}
                            </span>
                        }
                        {!isFetching &&
                            <a href='#'
                                onClick={this.handleRefreshClick}>
                                Refresh
                            </a>
                        }
                    </p>
                    {isFetching && posts.length === 0 &&
                        <p>Loading...</p>
                    }
                    {!isFetching && posts.length === 0 &&
                        <p>Empty.</p>
                    }
                    {posts.length > 0 &&
                        <View style={{ opacity: isFetching ? 0.5 : 1 }} hidden>
                            {posts.length}
                        </View>
                    }
                </View>
            </Layout>
        )
    }
}

import * as authActions from '../../../Reducers/auth'

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit, routing } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    // TODO: Figure out WTF is going on here. Server is string, browser is object
    var location = null
    if (typeof routing.locationBeforeTransitions === 'string') {
        location = routing.locationBeforeTransitions.replace('/', '')
    } else if (typeof routing.locationBeforeTransitions === 'object' && routing.locationBeforeTransitions) {
        location = routing.locationBeforeTransitions.pathname.replace(/^\//, '').replace(/\/$/, '')
    } else if (typeof window !== 'undefined') {
        location = window.location.pathname.replace('/', '')
    }

    return {
        user: state.auth.user,
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated,
        location
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch,
        actions: bindActionCreators(authActions, dispatch)
    }
}

const info = require('../../../Reducers/info')
const auth = require('../../../Reducers/auth')

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

        return Promise.all(promises)
    }
}]

export default asyncConnect(asyncItems, mapStateToProps, mapDispatchToProps)(Screen)
