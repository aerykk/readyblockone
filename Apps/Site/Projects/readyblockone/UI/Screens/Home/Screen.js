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
                <div className="home home--ellipse">
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

                            <div className="col-xl-6 offset-xl-1">
                                <div className="home__content">
                                    <form action="#" className="calculate">
                                        <div className="row">
                                            <div className="col-12 col-sm-7 col-md-5 col-xl-5">
                                                <input type="text" className="form__input" placeholder="Hashrate" />
                                            </div>

                                            <div className="col-12 col-sm-5 col-md-3 col-xl-3">
                                                <div className="form__select-wrap">
                                                    <select className="form__select">
                                                        <option value="ths">TH/s</option>
                                                        <option value="phs">PH/s</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-4 col-xl-4">
                                                <button className="btn btn--center" type="button">Calculate</button>
                                            </div>

                                            <div className="col-12">
                                                <p className="calculate__text">0.000 000 00 BTC ($0) / 0.000 000 00 BCH ($0)<br />(will change based on mining difficulty and Bitcoin price)</p>
                                                <span className="calculate__info">Estimated 24 hour revenue<a href="#"><i className="ti-info"></i></a></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="#services" data-scroll className="home__btn">
                        <i className="ti-angle-double-down"></i>
                    </a>
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

                <section className="section" id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <h2 className="section__title">Smart Mine Template</h2>
                                <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aut eos, <b>natus</b> magnam, aperiam voluptates.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="service">
                                    <i className="ti-bolt"></i>
                                    <h3 className="service__title">Instant Connection</h3>
                                    <p className="service__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <b>alteration in some form</b>, by injected.</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="service">
                                    <i className="ti-wallet"></i>
                                    <h3 className="service__title">Instant Conclusion</h3>
                                    <p className="service__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="service">
                                    <i className="ti-stats-up"></i>
                                    <h3 className="service__title">Detailed Statistics</h3>
                                    <p className="service__text">There are many variations of passages of Lorem Ipsum available, but the <a href="#">majority</a> have suffered alteration in some form, by injected.</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 col-xl-3">
                                <div className="service">
                                    <i className="ti-harddrives"></i>
                                    <h3 className="service__title">Power Distribution</h3>
                                    <p className="service__text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <h2 className="section__title">Supported currencies</h2>
                                <p className="section__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed aut eos, natus magnam, aperiam voluptates.</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc BTC currenc__icon"></i>
                                    <span className="currenc__name">Bitcoin</span>
                                    <span className="currenc__hash">43.1 PH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc ETC-alt currenc__icon"></i>
                                    <span className="currenc__name">Ethereum Classic</span>
                                    <span className="currenc__hash">20.0 GH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc ETH currenc__icon"></i>
                                    <span className="currenc__name">Ethereum</span>
                                    <span className="currenc__hash">120.1 GH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc START currenc__icon"></i>
                                    <span className="currenc__name">Startcoin</span>
                                    <span className="currenc__hash">28.6 kH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc LTC currenc__icon"></i>
                                    <span className="currenc__name">Litecoin</span>
                                    <span className="currenc__hash">2.7 GH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc XMR currenc__icon"></i>
                                    <span className="currenc__name">Monero</span>
                                    <span className="currenc__hash">44.6 MH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc VTC currenc__icon"></i>
                                    <span className="currenc__name">Vertcoin</span>
                                    <span className="currenc__hash">1.6 MH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc IFC currenc__icon"></i>
                                    <span className="currenc__name">Infinitecoin</span>
                                    <span className="currenc__hash">184.1 kH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc SLS currenc__icon"></i>
                                    <span className="currenc__name">Salus</span>
                                    <span className="currenc__hash">6.2 MH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc XPM currenc__icon"></i>
                                    <span className="currenc__name">PrimeCoin</span>
                                    <span className="currenc__hash">12.1 MH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc DASH currenc__icon"></i>
                                    <span className="currenc__name">Dash</span>
                                    <span className="currenc__hash">198.8 kH/s</span>
                                </div>
                            </div>

                            <div className="col-6 col-sm-4 col-md-3 col-xl-2">
                                <div className="currenc">
                                    <i className="cc SDC currenc__icon"></i>
                                    <span className="currenc__name">Shadow</span>
                                    <span className="currenc__hash">13.5 MH/s</span>
                                </div>
                            </div>

                            <div className="col-12">
                                <a href="#" className="btn btn--center btn--top50 btn--shadow">get started</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="section__title section__title--margin">How Much Will I Earn?</h2>
                            </div>

                            <div className="col-12 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
                                <form action="#" className="calculate">
                                    <div className="row">
                                        <div className="col-12 col-sm-7 col-md-5 col-xl-5">
                                            <input type="text" className="form__input" placeholder="Hashrate" />
                                        </div>

                                        <div className="col-12 col-sm-5 col-md-3 col-xl-3">
                                            <div className="form__select-wrap">
                                                <select className="form__select">
                                                    <option value="ths">TH/s</option>
                                                    <option value="phs">PH/s</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-4 col-xl-4">
                                            <button className="btn btn--center" type="button">Calculate</button>
                                        </div>

                                        <div className="col-12">
                                            <p className="calculate__text">0.000 000 00 BTC ($0) / 0.000 000 00 BCH ($0)<br />(will change based on mining difficulty and Bitcoin price)</p>
                                            <span className="calculate__info">Estimated 24 hour revenue<a href="#"><i className="ti-info"></i></a></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <div className="review">
                                    <blockquote className="review__blockquote">I love the simple, minimal design, lots of white, not an overwhelming amount of features. Compared to some other alternatives I have tried, it was easy to sign up, bug-free, and easy to use so far.</blockquote>
                                    <span className="review__autor">
                                        John Doe
                                        <span>Entrepreneur</span>
                                    </span>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6">
                                <div className="get-started">
                                    <h3 className="get-started__title">Client Area</h3>
                                    <p className="get-started__text">Our client port can be accessed here.</p>
                                    <a href="/client" className="btn">access</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="partners section--border-top section--border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="owl-carousel partners__slider">
                                    <div className="item">
                                        <a href="#">
                                            <img src="img/partners/partner.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="item">
                                        <a href="#">
                                            <img src="img/partners/partner.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="item">
                                        <a href="#">
                                            <img src="img/partners/partner.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="item">
                                        <a href="#">
                                            <img src="img/partners/partner.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="item">
                                        <a href="#">
                                            <img src="img/partners/partner.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="item">
                                        <a href="#">
                                            <img src="img/partners/partner.png" alt="" />
                                        </a>
                                    </div>

                                    <div className="item">
                                        <a href="#">
                                            <img src="img/partners/partner.png" alt="" />
                                        </a>
                                    </div>
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
