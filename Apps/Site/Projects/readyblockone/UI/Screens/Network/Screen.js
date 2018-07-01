const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

import Layout from '../../Layouts/Default'

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

        const page = this.state.page

        return (
            <Layout>
                <section className="section section--border-bottom" style={{marginTop: '300px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <h2 className="section__title">Overview</h2>
                                <p className="section__text">Ready Block One is dedicated to bringing people useful and impactful information within the crypto space.</p>
                            </div>
                        </div>
                        <br /><br /><br />


                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <h2 className="section__title">Review Network</h2>
                                <p className="section__text">Visit our expansive review network. Our review network gives users one simple page to reference to learn about & understand different decentralized technology software, such as Bitcoin. With easy to understand, accurate and up-to-date information It makes it easy to share with family & friends.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
                                <div className="price">
                                    <h3 className="price__title">Bitcoin (BTC)</h3>
                                    <ul className="price__list">
                                    </ul>
                                    <p className="price__text"></p>
                                    <a href="/review/btc" className="btn btn--border btn--center">Go</a>
                                </div>
                                <div className="price">
                                    <h3 className="price__title">Ethereum (ETH)</h3>
                                    <ul className="price__list">
                                    </ul>
                                    <p className="price__text"></p>
                                    <a href="/review/eth" className="btn btn--border btn--center">Coming soon</a>
                                </div>
                                <div className="price">
                                    <h3 className="price__title">Ripple (XRP)</h3>
                                    <ul className="price__list">
                                    </ul>
                                    <p className="price__text"></p>
                                    <a href="/review/xrp" className="btn btn--border btn--center">Coming soon</a>
                                </div>
                            </div>
                        </div>
                        <br /><br /><br />


                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <h2 className="section__title">Faucet</h2>
                                <p className="section__text">Coming soon</p>
                                <br /><br /><br />
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <h2 className="section__title">Dictionary</h2>
                                <p className="section__text">Coming soon</p>
                                <br /><br /><br />
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
