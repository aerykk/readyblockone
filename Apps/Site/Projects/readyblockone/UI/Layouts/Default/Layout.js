const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

class Layout extends Component {
    static propTypes = {
        breadcrumb: T.element,
        site: T.object.isRequired
    }

    static defaultProps = {
        breadcrumb: null,
        site: {}
    }

    constructor() {
        super()

        this.state = {
        }
    }

    componentDidMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Layout.css').toString() : require('./Layout.css'), 'stokelayout-', (styles) => {
            this.setState({
                styles: styles
            })
        })
    }

    render() {
        const { children, site } = this.props

        return Framework.wrapStyles(this.state.styles,
            <View>
                <header className="header">
                    <div className="header__logo">
                        <a href="index.html">
                            <img src="img/logo.png" alt="" />
                        </a>
                    </div>

                    <ul className="header__nav">
                        <li className="dropdown header__dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>

                            <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLink1">
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index2.html">Home 2</a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li className="dropdown header__dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>

                            <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                <li><a href="article.html">Article</a></li>
                                <li><a href="faq.html">Help</a></li>
                            </ul>
                        </li>
                    </ul>

                    <div className="header__btns">
                        <a href="login.html" className="btn btn--transparent btn--header">log in</a>
                        <a href="signup.html" className="btn btn--white btn--header">sign up</a>
                    </div>

                    <button className="header__menu" type="button">
                        <i className="ti-menu"></i>
                        <i className="ti-close"></i>
                    </button>
                </header>

                <section className="home home--ellipse">
                    <div id="particles-js" className="home__particles"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-lg-6 offset-lg-3 col-xl-5 offset-xl-0">
                                <div className="home__content">
                                    <h1 className="home__title">Start Bitcoin mining today!</h1>
                                    <p className="home__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dicta ratione expedita blanditiis.</p>
                                    <a href="#" className="btn btn--shadow">get started</a>
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
                </section>

                {this.props.children}

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

                <div className="section section--bg" data-bg="img/section/section-bg.jpg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                    <a className="section__video" href="https://vimeo.com/45830194"><i className="ti-control-play"></i></a>
                                    <h2 className="section__title section__title--white">Why Choose Us?</h2>
                                    <p className="section__text section__text--white section__text--head">Check out our mining farm setup. To bring you the best we must hire the best.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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

                <section className="section section--border-bottom">
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
                                    <h3 className="get-started__title">Create Account</h3>
                                    <p className="get-started__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias dicta ratione expedita blanditiis.</p>
                                    <a href="#" className="btn">get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="partners section--border-top section--border-bottom">
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
                </div>

                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="footer__logo">
                                    <a href="index.html">
                                        <img src="img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                <h6 className="footer__title">Features</h6>
                                <ul className="footer__list">
                                    <li><a href="#">Instant connection</a></li>
                                    <li><a href="#">Instant conclusion</a></li>
                                    <li><a href="#">Detailed statistics</a></li>
                                    <li><a href="#">Power distribution</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                                <h6 className="footer__title">Company</h6>
                                <ul className="footer__list">
                                    <li><a href="#">Customers</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Press</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-lg-3">
                                <h6 className="footer__title">Contact</h6>
                                <ul className="footer__list">
                                    <li><a href="mailto:hello@readyblock.one">hello@readyblock.one</a></li>
                                </ul>
                                <ul className="footer__social">
                                    <li><a href="#"><i className="ti-facebook"></i></a></li>
                                    <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                    <li><a href="#"><i className="ti-instagram"></i></a></li>
                                    <li><a href="#"><i className="ti-twitter-alt"></i></a></li>
                                    <li><a href="#"><i className="ti-google"></i></a></li>
                                </ul>
                            </div>

                            <div className="col-12">
                                <div className="footer__copyright">
                                    <small>© 2018 Ready Block One.</small>

                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { site } = state

    return {
        site
    }
}

export default connect(mapStateToProps)(Layout)
