const Framework = require('../../../../../../../Framework')
const { React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString } = Framework

import Markdown from '../../../../../Shared/UI/Components/Markdown'

const supportedSubsites = [
    'crypto'
]

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

        let subsite = site.title.split('.in5mins.com')[0].split('-')[0] // TODO: solve mutli-words like "bitcoin-cash"

        if (supportedSubsites.includes(subsite)) {
            const Layout = require('../../Layouts/Subsites/' + subsite).default

            return (
                <Layout>
                    <section class="overview-block-ptb">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 text-center">
                                    <div class="iq-error">
                                        <h2 class="iq-mb-30">404</h2>
                                        <h4>Oops! This Page is Not Found</h4>
                                        <h5 class="iq-mt-10">Please go back to <a href="#" class="iq-font-yellow"> <i class="ion-ios-undo"></i> Home</a> and try to find out once again.</h5>
                                        <form class="form-inline iq-subscribe iq-mt-40">
                                            <div class="form-group">
                                                <input type="text" class="form-control iq-mtb-10" id="exampleInputName2" placeholder="Enter Your Email Here">
                                                <a class="button iq-mtb-10" href="#">subscribe</a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )
        } else {
            const Layout = require('../../Layouts/SubsiteUnavailable').default

            return (
                <Layout>
                    Token not found
                </Layout>
            )
        }
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
