const Framework = require('../../../../../../../Framework')
const { React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString } = Framework

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
                <a href="https://www.futuretechpodcast.com/podcasts/hyperbridge-org/" target="_blank" class="topdisplay"></a>

                <header className="simpal">
                    <div className="iq-header">
                        <div className="container white-bg" style={{ 'max-width': '1200px', 'border-radius': '5px 5px 0 0' }}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="logo">
                                        <a href="/"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/logos/bitcoin.png" alt="" /></a>
                                        <br />
                                        <div className="header-org">By <img className="price-main-img" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/rbo-logo-with-title.png" alt="" /></div>
                                    </div>
                                    <nav>
                                        <a id="resp-menu" className="responsive-menu" href="/"><i className="fa fa-reorder"></i> Menu</a>
                                        <ul className="menu text-right">
                                            <li><a href="javascript:void(0)">Network</a>
                                                <ul className="sub-menu">
                                                    <li><a href="javascript:void(0)">Reviews <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                        <ul>
                                                            <li><a href="https://bitcoin-btc.review">Bitcoin (BTC)</a></li>
                                                            <li><a href="https://litecoin-btc.review">Litecoin (LTC)</a></li>
                                                            <li><a href="https://readyblock.one/reviews">More</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="https://readyblock.one/dictionary">Crypto Dictionary</a></li>
                                                    <li><a href="https://readyblock.one/faucet">Crypto Faucet</a></li>
                                                    <li><a href="https://readyblock.one/in5mins">Crypto In 5 Mins</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0)">Company</a>
                                                <ul className="sub-menu">
                                                    <li><a href="https://readyblock.one/about">About Us</a></li>
                                                    <li><a href="https://readyblock.one/contact">Contact Us</a></li>
                                                    <li><a href="https://readyblock.one/login">Client Area</a></li>
                                                </ul>
                                            </li>
                                            <li style={{ display: 'none' }}>
                                                <div className="iq-search"> <a className="search-btn not_click" href="javascript:void(0);"> <span>Search Button</span></a>
                                                    <div className="search-box not-click">
                                                        <input type="email" className="form-control not-click" id="exampleInputEmail1" placeholder="Search" />
                                                        <i className="ti-search"></i> </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <section id="iq-home" className="iq-banner overview-block-pt iq-over-blue-90">
                    <div id="intro" className="container">
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-12 align-self-center">
                                    <h1 className="iq-font-white iq-tw-6 iq-mb-10">We haven't reviewed that token yet, <span className="iq-font-yellow">but it may be on the way. </span></h1>

                                    <a href="/#history" className="button white iq-mt-15 bt-lg"><strong>Click here</strong> for all reviewed tokens</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="price-silder">
                        <div className="price-title">
                            <h6><img className="price-main-img" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/rbo-logo-with-title.png" alt="" /><br /><div className="price-main-title">Review Network</div></h6>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="owl-carousel" data-nav-dots="false" data-nav-arrow="false" data-items="6" data-sm-items="4" data-lg-items="6" data-md-items="5" data-autoplay="true" style={{ 'margin-top': '10px' }}>
                                        <div className="item">
                                            <div className="media">
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="media">
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="media">
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="#">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/btc.png" style={{ width: '40px' }} />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="#">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/eth.png" style={{ width: '40px' }} />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 2</small>Ethereum
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="#">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/xrp.png" style={{ width: '40px' }} />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 3</small>Ripple
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="#">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/bch.png" style={{ width: '40px' }} />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 4</small>Bitcoin Cash
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="main-content">


                </div>
                <footer className="iq-footer-5 iq-pt-60 iq-pb-20 dark-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <a className="logo iq-mt-0 iq-mb-20" href="https://readyblock.one"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/rbo-logo-with-title-inverted.png" alt="" /> </a>
                                <p className="iq-font-white">The world is changing. Are you ready?</p>
                            </div>
                            <div className="col-sm-7">
                                <ul className="iq-menu">
                                    <li><a href="http://readyblock.one/">Home</a></li>
                                    <li><a href="http://readyblock.one/network">Network</a></li>
                                    <li><a href="http://readyblock.one/about">Company</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                                <hr className="iq-mtb-20" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="iq-media-blog ">
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.facebook.com/readyblockone/"><i className="fa fa-facebook"></i></a></li>
                                    <li style={{ display: 'none' }}><a href="#"><i className="fa fa-google"></i></a></li>
                                    <li style={{ display: 'none' }}><a href="#"><i className="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 text-right">
                                <div className="iq-copyright iq-mt-10">Copyright <span id="copyright">2018</span> <a href="http://readyblock.one"><span className="iq-font-yellow">readyblock.one</span></a></div>
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
