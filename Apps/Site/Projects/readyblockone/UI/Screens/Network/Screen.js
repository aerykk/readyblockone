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
                                <h2 className="section__title">Pricing</h2>
                                <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aut eos, <b>natus</b> magnam, aperiam voluptates.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0">
                                <div className="price">
                                    <h3 className="price__title">Small</h3>
                                    <ul className="price__list">
                                        <li><b>Minimal Hashedrate:</b> 1 MH/s</li>
                                        <li><b>Service pay:</b> 0.005$ / 1 MH/s / 24h</li>
                                        <li><b>Equipment:</b> HashCoins SCRYPT</li>
                                        <li>Automatic charging in BTC</li>
                                        <li><b>1 year</b></li>
                                    </ul>
                                    <span className="price__value">$7.50</span>
                                    <p className="price__text">for 1 MH/s</p>
                                    <button className="btn btn--border btn--center" type="button">Buy now</button>
                                </div>

                                <div className="price">
                                    <h3 className="price__title">Medium</h3>
                                    <ul className="price__list">
                                        <li><b>Minimal Hashedrate:</b> 10 GH/s</li>
                                        <li><b>Service pay:</b> 0.0035$ / 10 GH/s / 24h</li>
                                        <li><b>Equipment:</b> HashCoins SHA-256</li>
                                        <li>Automatic charging in BTC</li>
                                        <li><b>1 year</b></li>
                                    </ul>
                                    <span className="price__value">$2.20</span>
                                    <p className="price__text">for 10 GH/s</p>
                                    <button className="btn btn--border btn--center" type="button">Buy now</button>
                                </div>

                                <div className="price price--best">
                                    <h3 className="price__title">Large</h3>
                                    <ul className="price__list">
                                        <li><b>Minimal Hashedrate:</b> 100 KH/s</li>
                                        <li><b>Service pay:</b> No</li>
                                        <li><b>Equipment:</b> GPU Rigs</li>
                                        <li>Automatic charging in ETH</li>
                                        <li><b>1 year</b></li>
                                    </ul>
                                    <span className="price__value">$2.20</span>
                                    <p className="price__text">for 100 KH/s</p>
                                    <button className="btn btn--center" type="button">Buy now</button>
                                </div>

                                <div className="price">
                                    <h3 className="price__title">Pro</h3>
                                    <ul className="price__list">
                                        <li><b>Minimal Hashedrate:</b> 1 MH/s</li>
                                        <li><b>Service pay:</b> No</li>
                                        <li><b>Equipment:</b> Multi-Factor</li>
                                        <li>Automatic charging in DASH</li>
                                        <li><b>1 year</b></li>
                                    </ul>
                                    <span className="price__value">$3.20</span>
                                    <p className="price__text">for 1 MH/s</p>
                                    <button className="btn btn--border btn--center" type="button">Buy now</button>
                                </div>
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
