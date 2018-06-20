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
    }

    render() {
        const { children, site } = this.props

        return (
            <View>
                <header className="header">

                    <ul className="header__nav">
                    <li>

                            <div className="header__logo">
                                <a href="/">
                                    <img src="/Apps/Site/Projects/readyblockone/Assets/Other/img/rbo-logo-with-title.png" alt="" style={{ width: '300px' }} />
                                </a>
                            </div>
                            </li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li className="dropdown header__dropdown">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Network</a>

                            <ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuLink2" style={{width: '200px'}}>
                                <li><a href="/network">Overview</a></li>
                                <li><a href="/network/reviews">Crypto Quick Reviews</a></li>
                                <li><a href="/network/in5mins">Crypto In 5 Mins</a></li>
                            </ul>
                        </li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/blog">Blog</a></li>
                    </ul>

                    <div className="header__btns">
                        <a href="/members" className="btn btn--white btn--header" style={{width: '160px'}}>member access</a>
                    </div>

                    <button className="header__menu" type="button">
                        <i className="ti-menu"></i>
                        <i className="ti-close"></i>
                    </button>
                </header>

                {this.props.children}

                <footer className="footer" style={{display: 'none'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="footer__logo">
                                    <a href="/">
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
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/privacy">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                {this.props.site.analytics && this.props.site.analytics.isEnabled && (
                    <script dangerouslySetInnerHTML={{
                        __html: `
                          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                          ga('create', '${this.props.site.analytics.GA.id}', 'auto');
                          ga('send', 'pageview');
                        `}} />
                )}
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
