const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Layout from '../../Layouts/Default'
import Markdown from '../../../../../Shared/UI/Components/Markdown'

import { testStuff } from '../../../Actions'

class Screen extends Component {
    static propTypes = {
    }

    constructor() {
        super()

        this.state = {
            page: {
                title: ''
            }
        }
    }

    onPageChange(state) {
        this.setState({
            page: state
        })
    }

    render() {
        const { site, location } = this.props

        const content = (
            <Markdown src={"/Apps/Site/Projects/readyblockone/Pages/" + (location || 'home') + ".md"} onChange={(state) => this.onPageChange(state)} />
        )

        const page = this.state.page

        return (
            <Layout>
                <div className="home home--ellipse" style={{ display: 'none' }}>
                    <div id="particles-js" className="home__particles"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-5 offset-xl-0">
                                <div className="home__content">
                                    <h1 className="home__title">Ready Block One</h1>
                                    <p className="home__text">One of the biggest movements in history is happening now. Are you ready?</p>
                                    <a href="#" className="btn btn--shadow">learn more</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {content}
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        )
    }
}

function mapStateToProps(state) {
    const { site, routing } = state

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
        site,
        location
    }
}

export default connect(mapStateToProps)(Screen)
