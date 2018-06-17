const Framework = require('../../../../../../../../Framework')
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
                        <div className="container white-bg" style={{'max-width': '1200px', 'border-radius': '5px 5px 0 0'}}>
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
                                            <li><a href="javascript:void(0)">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="#intro">Intro</a></li>
                                                    <li><a href="#history">History</a></li>
                                                    <li><a href="#quick">Quick Links</a></li>
                                                    <li><a href="#compare">Compare</a></li>
                                                    <li><a href="#media">Media Centre</a></li>
                                                    <li><a href="#education">Education Centre</a></li>
                                                    <li><a href="#exchanges">Exchanges</a></li>
                                                    <li><a href="#wallets">Wallets</a></li>
                                                    <li><a href="#market">Market</a></li>
                                                    <li><a href="#faq">FAQ</a></li>
                                                </ul>
                                            </li>
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
                                                    <li><a href="https://crypto.in5mins.com">Crypto In 5 Mins</a></li>
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
                            <div className="row flex-row-reverse">
                                <div className="col-lg-5 col-md-12">
                                    <div className="banner-form">
                                        <div className="form-icon background-gradient-3">
                                            <img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/icon.png" alt="#" />
                                        </div>
                                        <h2 className="iq-tw-6">Bitcoin<small>Stats</small></h2>
                                        <div className="calculator iq-mtb-25">
                                            <img className="img-fluid" src="http://via.placeholder.com/800x300" alt="" />
                                        </div>
                                        <p>Bitcoin is the father of cryptocurrency. Created in 2008 by Satoshi Nakamoto, it was built as an alternative to traditional currency.</p>
                                        <ul className="listing-hand iq-mt-15 iq-tw-5">
                                            <li className="iq-mt-20">Released: 2009</li>
                                            <li className="iq-mt-20">Volaility: high</li>
                                            <li className="iq-mt-20">Type: currency</li>
                                            <li className="iq-mt-20">Architecture: bitcoin</li>
                                            <li className="iq-mt-20">Ledger: blockchain</li>
                                        </ul>
                                        <a href="#" className="button dark iq-mt-10">Buy Now!</a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 align-self-center">
                                    <h1 className="iq-font-white iq-tw-6 iq-mb-10">What is <span className="iq-font-yellow">Bitcoin?</span></h1>
                                    <p className="iq-font-white">Bitcoin is the original cryptocurrency. It's the king dadddy of crypto. It tooks the learnings of the cypher punk era in the 90s and built on it, combining blockchain, consensus and proof of work to create a safe to use currency with no double spending. Bitcoin was created in 2009 by Satoshi Nakamoto. Nobody knows who it was, if it was a group or an individual.
                                    </p>
                                    <a href="#exchanges" className="button white iq-mt-15"><strong>Exchanges:</strong> where to buy and sell</a>
                                    <br />
                                    <a href="#wallets" className="button white iq-mt-15"><strong>Wallets:</strong> how to hold it</a>
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
                                    <div className="owl-carousel" data-nav-dots="false" data-nav-arrow="false" data-items="7" data-sm-items="4" data-lg-items="7" data-md-items="5" data-autoplay="true">
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
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="#">
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="#">
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="#">
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
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
                    <section hidden className="overview-block-ptb iq-need">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
                                    <div className="heading-left">
                                        <h3 className="title iq-tw-5">What's it all about?</h3>
                                        <p><b>Bitcoin is the original cryptocurrency. It's the king dadddy of crypto. It tooks the learnings </b></p>
                                        <p>Bitcoin was created in 2009 by Satoshi Nakamoto. Nobody knows who it was, if it was a group or an individual. </p>
                                        <a className="button" href="#exchanges">Exchanges: where to buy and sell</a>
                                        <a className="button" href="#wallets">Wallets: how to hold it</a>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6">
                                    <div className="scroll-coins scrollme iq-r4-mt-40">
                                        <img className="img-fluid img-1 animateme" data-when="view" data-from="1" data-to="0" data-translatex="400" data-rotatez="180" src="http://via.placeholder.com/500x498" alt="" />
                                        <img className="img-fluid img-2 animateme" data-when="view" data-from="1" data-to="0" data-translatex="400" data-rotatez="180" src="http://via.placeholder.com/500x498" alt="" />
                                        <img className="img-fluid img-3 animateme" data-when="view" data-from="1" data-to="0" data-translatex="400" data-rotatez="180" src="http://via.placeholder.com/500x498" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="overview-block-ptb iq-bg iq-over-black-80 jarallax" hidden style={{ 'background-image': "url('http://via.placeholder.com/1800x1200')", 'background-position': "center center" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6">
                                    <div className="btcwdgt-chart"></div>
                                </div>
                                <div className="col-sm-12 col-lg-6 iq-why-box align-self-center iq-r-mt-40">
                                    <h2 className="iq-font-white iq-tw-5">Why use <span className="iq-font-yellow">Bitcoin?</span></h2>
                                    <p className="iq-font-white iq-mt-15">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    <ul className="listing-hand iq-mt-15 iq-tw-5 iq-font-white">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                        <li className="iq-mt-20">Suspendisse a risus malesuada, tempus arcu et, sodales sapien.</li>
                                        <li className="iq-mt-20">Morbi lobortis felis luctus lectus pretium, nec ultrices eros consequat.</li>
                                        <li className="iq-mt-20">Integer nec sapien et elit sodales rhoncus.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="history" className="overview-block-ptb iq-feature4 iq-additional">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#history">History</a></h3>
                                        <p className="iq-mb-30">Here is 3 Easy Steps to Busy & Sell Bitcoin. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-4 col-lg-4 iq-mtb-20">
                                    <div className="iq-Work-box text-center stap-up">
                                        <div className="Work-icon">
                                            <div className="step">1</div>
                                            <i aria-hidden="true" className="ion-social-bitcoin-outline"></i>
                                        </div>
                                        <h5 className="iq-tw-5 iq-mt-20 iq-font-yellow">Verify Your ID</h5>
                                        <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 iq-mtb-20 re-mt-30">
                                    <div className="iq-Work-box text-center stap-dowen">
                                        <div className="Work-icon">
                                            <div className="step">2</div>
                                            <i aria-hidden="true" className="ion-social-bitcoin-outline"></i>
                                        </div>
                                        <h5 className="iq-tw-5 iq-mt-20 iq-font-yellow">Make Payment</h5>
                                        <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-4 col-lg-4 iq-mtb-20 re-mt-30">
                                    <div className="iq-Work-box text-center">
                                        <div className="Work-icon">
                                            <div className="step">3</div>
                                            <i aria-hidden="true" className="ion-social-bitcoin-outline"></i>
                                        </div>
                                        <h5 className="iq-tw-5 iq-mt-20 iq-font-yellow">Buy or Sell Order</h5>
                                        <p>Dummy text of the printing and typesetting Ipsum is simply d industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section id="quick" className="overview-block-ptb iq-feature4 iq-additional">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#quick">Quick Links</a></h3>
                                        SOCIAL NETWORKS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section hidden className="overview-block-pt iq-feature4 iq-bg iq-over-black-80 jarallax particles-bg" style={{ 'background-image': "url('http://via.placeholder.com/1800x1200')", 'background-position': "center center" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-font-white">
                                        <h3 className="title iq-tw-5 iq-mb-20 iq-font-white">Bitcoin Growth Schedule</h3>
                                        <p>Here is 3 Easy Steps to Busy & Sell Bitcoin. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <img className="img-fluid" src="http://via.placeholder.com/1465x765" alt="#" />
                                </div>
                            </div>
                        </div>
                    </section>


                    <section hidden className="overview-block-ptb" >
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 col-lg-6 iq-bg">
                                    <div className="owl-carousel arrow-1" data-nav-dots="false" data-nav-arrow="true" data-items="1" data-sm-items="1" data-lg-items="1" data-md-items="1" data-autoplay="true">
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="http://via.placeholder.com/800x541" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="http://via.placeholder.com/800x541" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="http://via.placeholder.com/800x541" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="http://via.placeholder.com/800x541" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="http://via.placeholder.com/800x541" alt="#" /></a></div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 iq-r-mt-40">
                                    <div className="heading-left">
                                        <h3 className="title iq-tw-5">Why Choose Us</h3>
                                        <p> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    </div>
                                    <div className="iq-feature3 iq-mt-30">
                                        <div className="iq-icon yellow-bg">
                                            <i aria-hidden="true" className="ion-social-bitcoin-outline"></i>
                                        </div>
                                        <div className="fancy-content">
                                            <h5 className="iq-tw-5">Responsive Design</h5>
                                            <p>Lorem ipsum madolor sit, consectetur adipisicing elit, eiusmod tempor sicing elit, eiusmod tempor.</p>
                                        </div>
                                    </div>
                                    <div className="iq-feature3 iq-mt-25">
                                        <div className="iq-icon yellow-bg">
                                            <i aria-hidden="true" className="ion-social-bitcoin-outline"></i>
                                        </div>
                                        <div className="fancy-content">
                                            <h5 className="iq-tw-5">Responsive Design</h5>
                                            <p>Lorem ipsum madolor sit, consectetur adipisicing elit, eiusmod tempor sicing elit, eiusmod tempor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="compare" className="overview-block-ptb iq-feature4 iq-additional">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#compare">Compare</a></h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section hidden>
                        <a href="http://partners.etoro.com/B10521_A73660_TClick.aspx" Target="_Top"><img src="https://etoro-production.s3.amazonaws.com/partners/ads/1%20(3).JPG" style={{width: '100%'}} /></a>
                    </section>


                    <section id="media" className="overview-block-ptb" style={{ "background-image": "url('images/bg/bg.png');", "background-position": "center center;" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#media">Media Centre</a></h3>
                                        <p>Bitcoin and blockchain can be confusing at times. We promise these videos will make it clearer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-sm-4 iq-mtb-15">
                                    <div class="popup-gallery play-video">
                                        <div class="video-img"> <img src="http://i3.ytimg.com/vi/RplnSVTzvnU/hqdefault.jpg" class="img-fluid" /> </div>
                                        <div class="video play"><a class="popup-youtube" href="https://www.youtube.com/watch?v=RplnSVTzvnU"><i class="fa fa-youtube-play" aria-hidden="true"></i> </a></div>
                                    </div>
                                    <div class="iq-news-detai iq-pt-15">
                                        <div class="news-title"> <h5 class="iq-tw-5">How the blockchain will radically transform the economy</h5> </div>
                                        <div class="news-content">
                                            <h6 class="iq-tw-6">By Bettina Warburg</h6>
                                            <br />
                                            <p>Say hello to the decentralized economy -- the blockchain is about to change everything. In this lucid explainer of the complex (and confusing) technology, Bettina Warburg describes how the blockchain will eliminate the need for centralized institutions like banks or governments to facilitate trade, evolving age-old models of commerce and finance into something far more interesting: a distributed, transparent, autonomous system for exchanging value.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4 iq-mtb-15">
                                    <div class="popup-gallery play-video">
                                        <div class="video-img"> <img src="http://i3.ytimg.com/vi/97ufCT6lQcY/hqdefault.jpg" class="img-fluid" /> </div>
                                        <div class="video play"><a class="popup-youtube" href="https://www.youtube.com/watch?v=97ufCT6lQcY"><i class="fa fa-youtube-play" aria-hidden="true"></i> </a></div>
                                    </div>
                                    <div class="iq-news-detai iq-pt-15">
                                        <div class="news-title"> <h5 class="iq-tw-5">The future will be decentralized</h5> </div>
                                        <div class="news-content">
                                            <h6 class="iq-tw-6">By Charles Hoskinson</h6>
                                            <br />
                                            <p>This talk was given at a local TEDx event, produced independently of the TED Conferences. Tech entrepreneur and mathematician Charles Hoskinson says Bitcoin-related technology is about to revolutionise property rights, banking, remote education, private law and crowd-funding for the developing world.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <img border="0" src="http://partners.etoro.com/B10521_A73660_TGet.aspx" />

                    <section id="education" className="overview-block-ptb" style={{ "background-image": "url('images/bg/bg.png');", "background-position": "center center;" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#education">Education Centre</a></h3>
                                        <p>We've compiled a list of the only the best rated books on Bitcoin.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-6 col-lg-6 iq-mt-30">
                                    <div className="iq-product grey-bg">
                                        <div className="pdt-image">
                                            <img src="https://www.cryptocompare.com/media/351372/mb.png" alt="" />
                                            <ul className="pdt-icon">
                                                <li><a href="#"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pdt-dec">
                                            <h5 className="iq-tw-5"><a href="#">Mastering Bitcoin</a></h5>
                                            <h6><em>By: Andreas Antonopoulos</em></h6>
                                            <p dir="ltr" style={{ height: '290px' }}><span>Our first book is from Andreas Antonopoulos and is called "Mastering Bitcoin" and it does exactly what is says on the tin. This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
                                            <div className="shop-price float-left iq-mt-10">
                                                <strong className="iq-font-yellow">$98.50</strong>
                                            </div>
                                            <div className="iq-rating float-right iq-mt-10">
                                                <ul className="list-inline float-right iq-ml-10">
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <br clear="both" />
                                            <ul class="iq-tags list-inline">
                                                <li><a href="#">Blockchain</a></li>
                                                <li><a href="#">Technical</a></li>
                                            </ul>
                                            <br clear="both" />
                                            <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/mb">Buy on Amazon</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 iq-mt-30">
                                    <div className="iq-product grey-bg">
                                        <div className="pdt-image">
                                            <img src="https://www.cryptocompare.com/media/351372/mb.png" alt="" />
                                            <ul className="pdt-icon">
                                                <li><a href="#"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pdt-dec">
                                            <h5 className="iq-tw-5"><a href="#">Bitcoin The Future of Money</a></h5>
                                            <h6><em>By: Dominic Frisby</em></h6>
                                            <p dir="ltr" style={{ height: '290px' }}><span>Our first book is from Andreas Antonopoulos and is called "Mastering Bitcoin" and it does exactly what is says on the tin. This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
                                            <div className="shop-price float-left iq-mt-10">
                                                <strong className="iq-font-yellow">$98.50</strong>
                                            </div>
                                            <div className="iq-rating float-right iq-mt-10">
                                                <ul className="list-inline float-right iq-ml-10">
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <br clear="both" />
                                            <ul class="iq-tags list-inline">
                                                <li><a href="#">Blockchain</a></li>
                                                <li><a href="#">Technical</a></li>
                                            </ul>
                                            <br clear="both" />
                                            <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/mb">Buy on Amazon</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 iq-mt-30">
                                    <div className="iq-product grey-bg">
                                        <div className="pdt-image">
                                            <img src="https://www.cryptocompare.com/media/351372/mb.png" alt="" />
                                            <ul className="pdt-icon">
                                                <li><a href="#"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pdt-dec">
                                            <h5 className="iq-tw-5"><a href="#">The Bitcoin Bible</a></h5>
                                            <h6><em>By: Benjamin Guttmann</em></h6>
                                            <p dir="ltr" style={{ height: '290px' }}><span>Our first book is from Andreas Antonopoulos and is called "Mastering Bitcoin" and it does exactly what is says on the tin. This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
                                            <div className="shop-price float-left iq-mt-10">
                                                <strong className="iq-font-yellow">$98.50</strong>
                                            </div>
                                            <div className="iq-rating float-right iq-mt-10">
                                                <ul className="list-inline float-right iq-ml-10">
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <br clear="both" />
                                            <ul class="iq-tags list-inline">
                                                <li><a href="#">Blockchain</a></li>
                                                <li><a href="#">Technical</a></li>
                                            </ul>
                                            <br clear="both" />
                                            <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/mb">Buy on Amazon</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-6 iq-mt-30">
                                    <div className="iq-product grey-bg">
                                        <div className="pdt-image">
                                            <img src="https://www.cryptocompare.com/media/351372/mb.png" alt="" />
                                            <ul className="pdt-icon">
                                                <li><a href="#"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="pdt-dec">
                                            <h5 className="iq-tw-5"><a href="#">The Science of the Blockchain</a></h5>
                                            <h6><em>By: Roger Wattenhofer</em></h6>
                                            <p dir="ltr" style={{ height: '290px' }}>If you want to lean the mathematical foundations about the blockchain then the must read is: The Science of the Blockchain. But be warned: that book is very mathematical. It uses heavy mathematical notation and it does not explain too much in plain language.</p>
                                            <div className="shop-price float-left iq-mt-10">
                                                <strong className="iq-font-yellow">$98.50</strong>
                                            </div>
                                            <div className="iq-rating float-right iq-mt-10">
                                                <ul className="list-inline float-right iq-ml-10">
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                    <li className="list-inline-item"><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                                                </ul>
                                            </div>
                                            <br clear="both" />
                                            <ul class="iq-tags list-inline">
                                                <li><a href="#">Blockchain</a></li>
                                                <li><a href="#">Technical</a></li>
                                            </ul>
                                            <br clear="both" />
                                            <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/mb">Buy on Amazon</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>




                    <section id="exchanges" className="iq-clients overview-block-ptb">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#exchanges">Exchanges</a></h3>
                                        <p>So where can we buy &amp; sell Bitcoin? Which is most popular? Which is safest?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20" style={{ height: '220px' }}>
                                            <a href="https://readyblock.one/go/binance"><img className="client-img" src="https://cdn.worldvectorlogo.com/logos/binance-coin.svg" alt="" /></a>
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5">Binance</h4>
                                                <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="https://readyblock.one/go/binance">www.binance.com</a></li>
                                            <li className="list-inline-item list-item-go"><a className="button iq-mt-25 float-right" href="https://readyblock.one/go/binance">Go to Binance</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20" style={{ height: '220px' }}>
                                            <a href="https://readyblock.one/go/bittrex"><img className="client-img" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPERAQDg8QDg8QEBAPDw0QDRANDhAPFREXFxgXFxMYICggGBslGxUWITEhJSorLjouFyAzODMsNygtLisBCgoKDg0OGhAQGjAlHR8rLS0rLS0rLS0uLS0tLS0rLS0rLSsvLi0tLS4tLS0tKy0tLS0tKy0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwcEBQYBAgj/xABREAABAwADBg4PBgQFBQAAAAABAAIDBAURBxIhMVGRBhMUFTM1QVVxc5Oys9MWFyIyUlRhYnKBkqGx0dJTgpSipMEjNkJ0JDRDwuGEo8Pw8f/EABsBAQACAwEBAAAAAAAAAAAAAAACBQEDBAYH/8QANREAAgACBAoLAQADAQAAAAAAAAECAwQRFDEFEhMyUVJTcZHRFSEzNEGBobHB4fBhIkLCI//aAAwDAQACEQMRAD8A1BK+iHhjy1ZAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ALUAtQC1ASWqBIiKyYLFo1Hq2jVdRKTS6JpxlvWFzGhzy8hxtNrhuNK89HHS51LmSpUyqrr6/L+PSX8MNHlUeCZMgrrMTX6o97peSi6xbbJhHari+RqtdB2b4LmNfqj3ul5KLrEsmEdquL5C10HZvguY1+qPe6XkousSyYR2q4vkLXQdm+C5jX6o97peSi6xLJhHari+QtdB2b4LmNfqj3ul5KLrEsmEdquL5C10HZvguY1+qPe6XkousSyYR2q4vkLXQdm+C5jX6o97peSi6xLJhHari+QtdB2b4LmNfqj3ul5KPrEsmEdquL5C10HZvguZOys6mIBFXSWEWj+HF1i1uRhBOrKri+Rm0UPZPguZ9a41Nvc/2IusTI0/ari+Rm0UPZPguZHNW9Sssvqukw5I4j/5FKGj4Qiumri+Rh0mhK+W+C5kWv1R73S8lF1ilZMI7VcXyMWug7N8FzGv1R73S8lF1iWTCO1XF8ha6Ds3wXMa/VHvdLyUXWJZMI7VcXyFroOzfBcxr9Ue90vJRdYlkwjtVxfIWug7N8FzGv1R73S8lF1iWTCO1XF8ha6Ds3wXMa/VHvdLyUXWJZMI7VcXyFroOzfBcxr9Ue90vJRdYlkwjtVxfIWug7N8FzGv1R73S8lF1iWTCO1XF8ha6Ds3wXMa/VHvdLyUXWJZMI7VcXyFroOzfBcxr9Ue90vJRdYlkwjtVxfIWug7N8FzGv1R73S8lF1iWTCO1XF8ha6Ds3wXMa/VHvdLyUXWJZMI7VcXyFroOzfBcxr9Ue90vJRdYlkwjtVxfIWug7N8FzNnVMdVU6Kkmj0LSzBHfEyMa3C5r7LL1x8ArmnxU2jRwKZMrxn4eX8Wk6JNlnwxOCC5eJWIK9MedJbVAkQkqRg76v43OqWrw0Fx0yM2AW4NLlVDRYksIzW9D90XVKTdClpaV7M4jUcv2bsyusrBpKjJRaBqOX7N2ZMrBpGSi0DUcv2bsyZWDSMlFoGo5fs3ZkysGkZKLQNRy/ZuzJlYNIyUWgiewtNjgQRjBxqaaarRBpp1M+VkwEBt6N3jfRC5I85nVDciVRJGFWeJvCf2W6T4mqb4GAt5oCAIAgCAIAgCAWoDbNgZYO5biG4uRxxaTqUK0HukM8FuZMeLSMVaDHp8bWtBDQO6GIeQrZKibfWQmQpIwFvNB3lzLYqz4qLmzKiwxnyd7/5LrBWZM3L5OCacCvSmZKokiIrJgsuk7T0D0mcyRebg7/N8/dF9M7pL8vZnPKwOEIAgCAIDn612V/3eaF3ycxHFNz2Yi2msIDc0bvGeiFxx5zOqG4kUTJhVnibwn9lvk+Jqm3GvW80hASQsDjhyKMTqJQqsl1OPL7lHHZLEQ1OPL7kx2MRDU48vuTHYxENTjy+5MdjERDK0A2DIpQusi1UfCkRN4zEOAfBcTvOs9QGJWXej0h8CtsnONcy41q6DQd7cx2Gs+Ki5syo8MZ8ne/8AkucFZkzcvk4JuJXhTslUSREUIlmUnaegekzmSLzsHfpvn7ovpndJfl7M51d5whAEAQBAc/Wuyv8Au80Lvk5iOObnsxFtNYQHtqAWoOsWoDxAEBNRsZ4FCO4lCZK1kwgCAIDFpGP1LbBcQivIlIibRtMjsHdbg3CuZy4jox4T3Vkfhe4rGTiGPCY9NpDXNAabTfW4iMFhWyXC0+shHEmuowluNR31zHYqz4mLmzKjwxnyd7/5LnBWZM3L5OBbiV4UzvJVAmQkqREs2k7T0D0mcyRecg79N8/dF9M7pL/eDOdtXecItQC1ALUAtQHP1qf4r/u80Lvk5iOObnsw7VsrNdQvkrM1C+SsVC+SsVC+SsVC+SsVC+SsVE1GdhPAoxvqJQoyLVrrJntqVgIAgMak4/UtsFxrivIrVIiLUAtQC1ALUB31zDYaz4mLmzKjwvnyd7+C4wXmTNy+TgGnAFeFQyVQMkRUjBZ1J2noHpM5ki87B36b5+6L2Z3WX+8Gc4u84ggCAIAgOdrY/wAV/wB3mhdsrs0cczPZYGgLQpQaZQo5qRBpkrnygv06ZlobI4DA1wGIKgp9Ony57hgiqXV4LQXdEocmOUoooevezoe1/Vfiv6mk/WuPpKk6/ouR1WCj6vq+Y7X9V+K/qaT9adJUnX9FyFgo+r6vmO1/Vfiv6mk/WnSVJ1/RchYKPq+r5jtf1X4r+ppP1p0lSdf0XIWCj6vq+Y7X9V+K/qaT9adJUnX9FyFgo+r6vmO1/Vfiv6mk/WnSVJ1/RchYKPq+r5nrdANWDFRf1FI+tYeEaS/9vRchYZGr6vmenQHVnix9VJpI/wB6dIUjW9FyFhkavq+ZDJc9q896yVno0iQ84lTWE6QvH0RF4PkPw9WamnXM22E0alPB3GzMa9vtNsIzFdEvC8az4eBojwXC818TjK6qSlUIgUmK9aTY2Zhv4XH0tw+R1hVrR6ZLnZr69HiVs6izJWcurSaakHD6l3wPqOOK8iUyIQBAEAQHf3L9hrPiYubMqTC+fJ3v4LjBeZM3L5K/biCuynZNaoEiIrJgs6k7T0D0mcyReeg79M8/dF7M7rB+8Gc6u84QgCAIAgOcrjZX/d5oXbK7NHJMzy2rlW1sPGUjpnLyuEe8ReXsekoXYwnXrhOsIAgCAIAgCAIAgCAhpdGZMx0crGyRvF65jhaCFKGJwutXmIoVEqmUXozqJ1X0oxYXQyDTKO84SWW4Wk5WnBwEHdXqsH0rLQdd6vPOU6jZKPqudxplY1nAFkBAEAQHf3LthrPiYubMqTC+fK3v4LfBeZM3L5OAbiCuyod5LaokiElDBZNZ0lsdS1e51thfGMAtw6XL8lQyoHFTpqX990XU6JQ0SBv+ezOT13i8/wBkfNWWQiK/KwjXeLz/AGR80yEQysI13i8/2R80yEQysI13i8/2R80yEQysI13i8/2R80yEQysJqKwmD3uc22w2WW4DgaAumBOGCpmiJ1xVot+5TtZDxlI6Zy8phHvEXl7HpaF2MJ164TqCA19Or2h0d+l0il0eCS9DtLlpEcb7022G9cbbMBw+RbIZUcSrhhb8iMUcMN7Mfsqq7fCh/i4fmpWebqPgyOVl6y4jspq7fCh/i4fmlnm6j4MZWXrLiOymrt8KH+Lh+aWebqPgxlZesuI7Kau3wof4uH5pZ5uo+DGVl6y4mTRa7okpsipdHlORlIjecwKjFKjhvha8jKjhdzM9ayYQBAcPddq8SUETAd1RpWPB3bx7hG4cHdNP3VYYMm4k9LScdOl40p/wqFhwL1afUeaaPq1SMC1ALUAtQHf3LthrTiYubMqTC2fK3v4LfBmbM3L5K/acAV2VDJVEkRFDB3+iXaKruNj6KZU1F7/N3P3Rb0rucHl7Mr9XRThAEMhAEB45YdwRdFyjayHjKR0zl5LCPeIvL2PT0LsYTr1wnUEBSl1tttZD+1h58i9DglJy3v5FLhN1RrccjpYyK4xUVOMxpYyJioYzGljImKhjMaWMiYqGMz5fA04wDwi1HAiSjaLBuU6I5WzigzPdJDI1xo9+6+MT2i29BP8ASWg4Ny9wYyqLCdEhhhykK3lxg+lOJ4kXkW0qMtggNJo3iv6upwyUWZ3rawuHwW6jOqbC/wCo1zl/5xbigIHWgL2cD6jykaqZIpkAgCAICwbluw1pxMXNmVLhbPlb38FvgzNmeXyV63EFdFSyZRJERQwd/om2iq7jY+imVPRe/wA3c/dFtSu5wb17Mr9XJUBAbmid4zgXLHnM6YbiVRMmJWfej0v2K2SryEy41bsS3u40oui5RtZDxlI6Zy8lhHvEXl7HpqH2MJ2C4jqCAqe6PVgmrG0vLf8ADRCwNB/rkV1g2c4JdVXiVVPlqOPyNA/Q80AnTXYAT3g3Bwq0VKddxXWdaTn7V2nIEBkwNBGEA4TuLXE3WbIV1El43wRmWK2ZqNnoT7msKEWiw6e0YBuFpB9xXFT+uRFuOqh9U6EvdeWPRBAarRZ/kKd/Z0noXLZJ7SHeiE3Me5n53ovejgXspWaeVmXky2msIAgCAsG5ZsNacTFzZlS4Wz5W9/Bb4MzZnl8letxBXRUu8mUSRCShgsDRNtFVvGx9FMqei9/mbn7otqT3SDy9mV/arkqBagNzRO8ZwLljzmdENxKokjErTvB6Q+BWyVea5lxq3HAt7uNSLpuT7WQ8ZSOmcvJ4Q7xF5ex6Wh9jCdguI6ggK20b/wCf/wCni5z1aULM8yupecaqXvXei74LvV6ONnCAq3K09tQwZdGPc+srVFebIbiVYMm50EQaZWNFAw3r3SHyBsbj8bFw4QiqkRHZQoa5yLvXmS/CA0WjqYMq6mk4L6jviHDILwe9wW6jqubDvNU91S4txStHoMd6MB9or1MEcSR56KFVkuoo8h9oqWUiIYkI1FHkPtFMpEMSEaijyH2imUiGJCauUWOcBiBIGddCuNLXWd/cr2GtOJi5s6p8K58re/gtcG5szy+SvWnAFclUyVRMkRQwWBon2hq3jYuimVPRe/zNz90W1J7pB5ezK+VwVIQGZFTy0Bt6DYLMZWty03WbFHUj61yPgjOVjJLSZyhFSaWXgAgCw24CVKGDFZGKKtGK5TZFF13J9rIeMpHTOXlMIdvF5ex6Sh9ijsFxHUEBW+jiN+r7WxyOGp4u6bG9zbb5+C0CxWVDjSg634nBSoW4upGnlbJeu/gy96f9GTJwLtU2Cu9cTlcuLQcYKDSPFqR+Hl+Ss7TK1lxRwWaZqsahpHi1I/Dy/JLTK1lxQs0zVZkQUWcCw0ekW2+LS/JQiny285cUTVHmarMyi1RTJjZFQ6S4ndNHfG31veABnWqOlSoV1xLiThos1vqhZZugHQg6g389JLTSZG3gY03zYY7bSL7dcSBacWAWZTSU2mZZ4sNyLaiUbJKt3s7JcB2BAV7dWrcXsVCYbXvc2aYD+mNp7gHylwB+4rCgSm4sfQcNNmVQ4pwjBYFeIqGfVqyBagCA0k/fO9J3xXVDcjmivO+uV7DWnExc2dVGFc+VvfwWuDc2Z5fJXjcQVyVTvJlEyRFDBYOifaGreNi6KZVFF79M3P3RbUnukHl7Mr1XBUhAEAQBAeOxLDuMouu5NtZDxlI6Zy8rhDt35ex6Sh9ijsVxHSEAQBAEAQBAEAQGPTqdDR2GSkSxwRjHJLI2Ng9ZwLKTbqQOKr66TA0FlXjVMpwCYgto7PLlfwDB5V2SaFFE/wDLqRyTaXDD1Q9bK9c98j3yyuMksjr58jsbj/8AAABkACu5ctQKpFTMjcbrZ9rYawgCAIDRz9870nfFdUNyOeK8sC5VsNa8TFzJ1UYVz5W9/BaYNzZn7SV23EOBXJVO8mtUSRCShgsav9o6t42PoplT0fvszc/dFtSO6wb/AIZxFgyDMrSsrRYMgzJWBYMgzJWDAdjK2Gti1AeORmUXZcl2sh4ykdM5eVp/bvy9j0dE7FHYrjOkIAgCAIAgCAIAgPiSNrhY5ocMjgHDMUBoa10FUCkAk0dsMh/1YAIX25TZgd6wVvl0mZBczTHR5cd6K10SaHpqueBIdNgeSIqQBZabLb14/pdj8hstG6BcUalQzVV4lXPozl7jWArsrOU9QBAEBo5++d6TviuqG5HPFeWBcp2GteJi5k6qcKZ8re/gtMHZsz9pK7acA4FcFW7yW1RMkRQwWPX+0VW8bH0Uyp5HfZm5+6LWkd1g3/DOHVmVwQBDJgOxnhW01M8WaweOWGEXdcl2rh4ykdM5eWp/bvy9j0dE7FHYrjOkICqbpWiysKJThDRaTpMWp4n3mkwP7sveCbXtJ3BmVrQaLLmwVxLxK+mUiOU0oTmOz6t/HT+Gov0Lv6Nk6PVnDb5ukdn1b+On8NRfoTo2Ro9WLfN0js+rfx0/hqL9CdGyNHqxb5ukdn1b+On8NRfoTo2Ro9WLfN0kkV0OtmnDSmv8jqNBYfZaCsPBkl+HqSWEJivOq0L3UjJIyGsI2R35DW0qK0RhxwC/YSb0ecDw2DCuGkYNcCxoHX/DskU6GN1RdRZ6qiwCAwK9qtlMo8tHkxSNIDt1jxha4eUGw+pTlxuCJRLwIRwKOFwsoqG+aXMeLHxudG8ZHtJaRnBXo5ceNDWUUyHFdRMtprCAIDRz9870nfFdMNyNEV5YFyjYa14mLmTqpwpnyt7+Czwdmx/tJXTcQ4FcFW7yZRJERQwWPX+0VWcbH0Uyp5HfZm5+6LWkd2g3/DOHVmVwQBAYDsZ4VtNbPFkwCCcQJ4AotmUi7rku1kPGUjpnLzFP7d+XseionZI7FcZ0hAUjddaTWYsBP+EhxDz5FfYLf/m95UYRzkcheO8E5iratFXUxeO8E5ilaFTF47IcxStCo+VkwEB8yNBBBUWShdTP0PoMprp6BQ5Xm+e6Bge7dL2i9J9ZBXkqRAoJsUK0nppUWNAmbpaTYEBSGi+DSqypjRiMjZB9+Jjj+YlXtCirlop6WqpjNeu05AgCA0c/fO9J3xXTDcjRFeWBco2GteJi5k6qsKZ8re/gssHZsf7SV03EOBW5WO8mUSRCShgsbRI+9qGrDj/ixdFMqmj9dNmbn7otKR3WDf8ADOB1V5vvVpilZjDVXm+9MUYw1V5vvTFGMY5KkYFqGCejHA71KEZOAuq5TtbFxlI6Zy81Te2fl7F/ROyR165DpCApi6ttkP7WHnyK7wb2fmVNPz/I5ZWZXhDB47EeAoDAtW01i1AeEozJfVzO3WyiW+DJm0168rTO3iPR0bsoTp1zG8ICjrp9JMdaShoGGGAm23He2fsrzB0KcvzKmnuqM5zXJ+RuY/NWeTRXY7GuT8jcx+aZNDHY1yfkbmPzTJoY7MR77STlJOdbF1EGWHcn2GteJi5k6qcJ50re/gs8H5sf7SV004BwK3Kx3ktqiSIihgsfRFC59Q1aGNLjpsRsGTSplU0eJKmzK9D90Wk9N0aBL+fJwOt032bvd81Z5SHSVuTi0EM0LmGx4LTZbYcn/oUlEncYcLV5GpEQgCAyKNid6lrjJwF13KdrYuMpHTOXm6b2z8vYvqJ2SOvXIdIQFL3V9sx/aw8+RXWDuz8yqp+f5HLWqzK8WoYPHYjwFAa9bTWErB5hNjWguc4hrWtFrnOJsAA3SSoxRJKtk4IXE6kfpHQ1VxolEo1HdhdFCxjyMRfe9177V5OdHjxuLSz0kEOLCkbJayYQFBXUZb6tqSPAZAz/ALLXf7lf4NVUsp6e/wDOo5pWZWhZAQBAWNcm2GteJi5k6qMJ50ve/gtMH5sf7SVw3EOBW5WO8mUTJEUMFrUraSrvSj6OVUsPe5n7QW8zu8H7Scyus5DQV/sjeLHOcuqTmmibea1bTUEAQE9GOB3qUIycBdtyjayLjaR0zl5um9s/L2L6i9kjr1ynQEBwOjTQHNWFL1THSIom6SyK8exznWtc422j0vcu2jUtSYamjkn0bKuus0varpXjcHJSfNdXScOr6nP0e9b0HarpXjcHJSfNOk4dX1HR71vQG5VSvG4OSk+az0mtX1HR71iDtRUrxyDkpPms9KrVMdHf0liuQSk93TmAbt7RnE+9yw8K6IfUysHLxZ1mhe59Q6A8Td3SZ297LLZYw5WMGAHy4T5VxT6ZMmqp9SOuVRoJfWrzrlyHQEAQH5x0QzClU2mTg9zJSH3px2sabxpzNC9HQ1iS0ijpTxo2Yephl9y7MY5cUamGX3JjDFGphl9yYwxRqYZfcmMMUsG5XHew1rht/gRcydVeEXXFL3v4LGgdSjW75K0biHArcrHeTKJkhJQwWhW9LEVRVa5wJBkjGCy3Y5T+yp5UONS5i3+6Laa6qPA/3icZr5H4D/y/Nd+Rek4cqjW1nSxK8OaCAGhthstxk/ut0uFwqo1RxYzMS1TIC1ALUBPRsTvUoRk4C7blG1kPGUjpnLzlN7Z+XsXtF7JHYLlOgIAgCAIAgCAIAgCAIDlromiEUGiPDHWUmcOho7f6gSLHP4Gg28Ng3V0UaVlI0vDxNM+ZiQV+JSFHZegDyL0MKqRRxOtkikRCAIAgO+uX7DWvERcydVuEM6Xvfwd9Buj3L5KvacA4Fbla7ye1RMkJKyYLF0U/y/VnHRdFMquj98mbn7os6R3aH9pK5VoVgQBAEAQGRRsTvUoRk4S7rlG1kPGUjpnLztM7Z+XsXlF7JHYLlOgIAgCAIAgCAIAgPiaZrAXPc1jRjc5wa0esrKVYON0QXSaFRwW0Zwps2EAROthB86XFZ6NpXVKocyN9aqRzzKTBB/WVPW1ZT02Z1IpT7+QiwAC9jjZuNY3cHvy2q4kyIZaqRVTZ0Ux1sx1vNIQE0VGc8WtAsxY7FhxJGVC2feoZMg9oLGOjOIxqGTIPaCY6GIzurmsDmQ1pfWYYI7MNuJk/zVdTok4pe9/B3UJNKPcvkqppwDgCuCsd5NaomSIrJgsXRV/L9V8dF0Uyq6P3yZufuiypHdof2krlWhWhAEAQBAZNE3fUoREoTbUKvabR2CKj0uWGMEkRsvb0Em04xlJXNHRpcbra6zognxwKpMn7K6z8fn/J9KhY5WgnapmkdldZ+Pz/AJPpSxytAtUzSOyus/H5/wAn0pY5WgWqZpHZXWfj8/5PpSxytAtUzSOyus/H5/yfSljlaBapmk8dorrOw/4+fF5n0pY5WgWqZpMTsyrTfCf8nyU7DJ0GLZM0g6Ma03wnzsH7JYZWgxbJmkhk0UVi8WOp9KI8k7mc2xSVDlL/AFMOlzH4mspMj5TfTSPmd4UsjpTncSt0MqGG5GqKdHFezJorRejhKNdZFMnWDIQwEBtKt7z7xWqO82wXGUoEggOw0B7DWXEs5ky4qXnQb+R2UW6P9pKfbiHAFdFS7yZRJEJKyYLH0Vfy9VfHRdDMqyj98mbn7osqR3aH9pK3VmVpLR4r9wbbZbbhx4gsN1KsylWZeth8Mez/AMqGUJZMa2Hwx7P/ACmUGTPHVaQCb8YAT3uRMoMQhoe76lKIxCZKgZCAIAgCAID5diPAVkGvWwgEAQBAZtG70cJUIrySJVEyEAQG0q3vPvFao7zbBcZSgSCA7DQFsNZcQzmTLipedBv5HXRbov2kp5uIcAV0VbvJ7VgyQlDBY+ir+Xqr46LoZ1WUfvce5+6LGkd2h/aSt1ZlaZVW7IOB3wKjHcTgvNwtBtCA+Ze9d6Lvgsq8wzRRyluLdW9qs0n3ql3kzJUjNY1S7yZkqQrGqXeTMlSFY1S7yZkqQrGqXeTMlSFY1S7yZkqQrPDSHeTMlSFZEsmAhgIAgMyjd6OEqEV5NXEywZCAIDZVfI0MsLgDfHASAtUadZshuMnTm+G32go1MlWhpzfDb7QSpitHZaAHgw1nYQf4DMRB/omXDS86DfyOui3RftJT7cQ4Arkq3eTWrBkiKGCx9Ff8vVXx0XQzqso/e49z90WU/u8JW6sytMmrdkHA74KMdxOC83K0GwID4l713ou+CyrwzQLoNAQBAEAQBAEBm1OwOlaHAOFjsBAI70qEx1Qk5a6zoNSRfZs9hq58Z6TfUjnK0aBM8AAAEWACwDuRuLolv/FGiNdZiqZAIDMox7n1lQivJq4ltWDItQC1ALUAQBAWBcs2GteIi5k6rqdfL3v4O2hXR7l8lWtxDgCtSvd5MomSElZMFwQ1RDWVTVfRnU2KiujvJSXXkhwMkbelt82zv7fUqdzYpNIjixa6y3yamSYYa6jUdq6DfmDkGdat3SEWzfH6NNhh1/3Elo1zOBjg7XiA2W4NIYMY41YdPia7N8foKhQr/f8AcTM7AoN9oOSZ1qhbItR/vIlZFr+n2OwKDfaDkmdalsi1H+8hZFr+n2eP0AQEEa7QYQRsTN0calsi1H+8hZFr+n2a/tXQb8wcgzrVs6Qi2b4/RGww6/7iO1dBvzByDOtTpCLZvj9Cww6/7iO1dBvzByDOtTpCLZvj9Cww6/7iO1dBvzByDOtTpCLZvj9Cww6/7iO1dBvzByDOtTpCLZvj9Cww6/7iO1dBvzByDOtTpCLZvj9Cww6/7iO1dBvzByDOtTpCLZvj9Cww6/7iZFBubQRPD9d4HWW4NJYMYsx6aoxU6KJVYj4/RlUOFPO/cTZ9hkG+kHJs6xa7VFqP95E7Mtb9xNVTLmsEj3P13gbfWYNJYbMAGPTfItkNPiSqxHx+iDocLdeN+4kPaug35g5BnWqXSEWzfH6MWGHX/cR2roN+YOQZ1qdIRbN8foWGHX/cSaO5rA0Wa8QcgzrVh0+LZvj9CxLX9Ps++1xBvvByDOtWLdFs3x+hY1r+n2O1xBvvByDOtS3RbN8foWNa/p9jtcQb7wcgzrUt0WzfH6FjWv6fY7XEG+8HIM61LdFs3x+hY1r+n2O1xBvvByDOtS3RbN8foWNa/p9jtcQb7wcgzrUt0WzfH6FjWv6fZvNDtRwVbDTv8fDSDPCAAAyK9vGSee622/8ActE6dFOih/xqqfL+G6VJUpRf5V1lHtxDgV2VLvJ7VEyQlZMHzYMgzIZrF6MgzIK2L0ZBmQVsXoyDMgrYvRkGZBWxejIMyCti9GQZkFbF6MgzIK2L0ZBmQVsXoyDMgrYvRkGZBWxejIMyCti9GQZkFbF6MgzIK2L0ZBmQVsXoyDMgrYvRkGZBWxejIMyCti9GQZkFbF6MgzIK2L0ZBmQVsXoyDMgrYvRkGZBWxejIMyCti9GQZkFbFgyDMgrZ6hglUSQKAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCA+1gkf/2Q==" alt="" /></a>
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5">Bittrex</h4>
                                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="https://readyblock.one/go/bittrex">www.bittrex.com</a></li>
                                            <li className="list-inline-item list-item-go"><a className="button iq-mt-25 float-right" href="https://readyblock.one/go/bittrex">Go to Bittrex</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table table-bordered iq-shopping-cart-table text-center">
                                            <thead className="grey-bg">
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Exchange</th>
                                                    <th>Age</th>
                                                    <th>Hacks</th>
                                                    <th>Safety</th>
                                                    <th>Details</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td><a href="#"><img src="https://cdn.worldvectorlogo.com/logos/binance-coin.svg" alt="img" style={{width: '50px'}} /> Binance</a></td>
                                                    <td className="align-middle">2017</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        9/10
                                                    </td>
                                                    <td className="text-left">
                                                        Moved from Hong Kong to Singapore to Malta. Relies on USDT (shady). Still relatively new and susceptible to hacks.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="/">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">2</td>
                                                    <td><a href="#"><img src="https://gemini.com/wp-content/themes/cedar/assets/img/Gemini-Horizontal-Dark.png" alt="img" style={{ width: '50px' }} /> Gemini</a></td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        10/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in USA. Works directly with SEC. Holds own USD. No major problems yet. Has gone offline randomly during high activity.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="/">Go</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="iq-about1 iq-bg iq-mt-30 background-gradient-2" style={{
                        'overflow': 'hidden'
                    }}>
                        <div className="container">
                            <div className="row h-100">
                                <div className="col-sm-12 quote-form">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <a href="http://partners.etoro.com/B10174_A73660_TClick.aspx" Target="_Top"><img className="img-fluid iq-img" border="0" src="http://partners.etoro.com/B10174_A73660_TGet.aspx" alt="" width="768" height="1024" style={{ left: '-30px' }} /></a>
                                        </div>
                                        <div className="col-sm-7 iq-ptb-40 ">
                                            <div className="heading-left iq-font-white">
                                                <h3 className="title iq-tw-5 iq-mb-20 iq-font-white">Trading Simplified</h3>
                                                <p>There are any number of ways to trade cryptocurrencies. However, as a new &amp; emerging market, most are complicated. <br /><br />
                                                    That's why eToro created an all-in-one platform, to simplify trading for the average investor. <br /><br />
                                                    They're unique value prop is they let you follow and copy the strategies of experienced traders, what they call "social trading". <br /><br />
                                                    It's really easy to get started. As with anything, please do your own due diligence and only invest what you can afford to lose. <br /><br />
                                                    As a best practice, we recommend depositing and withdrawing, just so you know you can get funds in &amp; out without hassle. <br /><br />
                                                    Try eToro out, and if you like or don't like it let us know.
                                                    <br /><br />
                                                    <a className="button iq-mt-25 background-gradient-3 text-center bt-lg" href="https://readyblock.one/go/etoro">Go to eToro</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section id="wallets" className="iq-clients overview-block-ptb">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#wallets">Software Wallets</a></h3>
                                        <p>What are the best software wallets to store Bitcoin?</p>
                                        <p><strong>Software Wallet:</strong> an app for desktop or mobile that stores cryptocurrency (usually less safe than a hardware wallet unless the device has TEE (trusted execution environment).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20" style={{ height: '220px' }}>
                                            <a href="https://readyblock.one/go/jaxx"><img className="client-img" src="https://seeklogo.com/images/J/jaxx-wallet-logo-51C54BDC59-seeklogo.com.png" alt="" /></a>
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5"><a href="https://readyblock.one/go/jaxx">Jaxx</a></h4>
                                                <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"></a></li>
                                            <li className="list-inline-item"><a href="https://readyblock.one/go/jaxx">jaxx.io</a></li>
                                            <li className="list-inline-item list-item-go"><a className="button iq-mt-25" href="https://readyblock.one/go/jaxx">Go to Jaxx</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20" style={{ height: '220px' }}>
                                            <a href="https://readyblock.one/go/exodus"><img className="client-img" src="https://themerkle.com/wp-content/uploads/2017/04/Exodus.png" alt="" /></a>
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5"><a href="https://readyblock.one/go/exodus">Exodus</a></h4>
                                                <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
                                            </div>  
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"></a></li>
                                            <li className="list-inline-item"><a href="https://readyblock.one/go/exodus">exodus.io</a></li>
                                            <li className="list-inline-item list-item-go"><a className="button iq-mt-25" href="https://readyblock.one/go/exodus">Go to Exodus</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="iq-clients overview-block-ptb">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#wallets">Hardware Wallets</a></h3>
                                        <p>What are the best hardware wallets to store Bitcoin?</p>
                                        <p><strong>Hardware Wallet:</strong> a device dedicated to storing cryptocurrency (usually pretty safe).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20" style={{ height: '220px' }}>
                                            <a href="https://readyblock.one/go/trezor"><img className="client-img" src="https://cdn-images-1.medium.com/max/1200/1*Sek00YxqMdOJp5FsjveZiQ.png" alt="" /></a>
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5"><a href="https://readyblock.one/go/trezor">Trezor</a></h4>
                                                <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"></a></li>
                                            <li className="list-inline-item"><a href="https://readyblock.one/go/trezor">trezor.io</a></li>
                                            <li className="list-inline-item list-item-go"><a className="button iq-mt-25" href="https://readyblock.one/go/trezor">Go to Trezor</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20" style={{ height: '220px' }}>
                                            <a href="https://readyblock.one/go/ledger"><img className="client-img" src="https://theme.zdassets.com/theme_assets/1431543/e5b6d706fb4088fdf4eedd246929962a226771c9.png" alt="" /></a>
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5"><a href="https://readyblock.one/go/ledger">Ledger Nano S</a></h4>
                                                <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"></a></li>
                                            <li className="list-inline-item"><a href="https://readyblock.one/go/ledger">ledgerwallet.com</a></li>
                                            <li className="list-inline-item list-item-go"><a className="button iq-mt-25" href="https://readyblock.one/go/ledger">Go to Ledger</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section id="faq" className="iq-faqs overview-block-ptb">
                        <div className="container ">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#faq">FAQ</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 col-md-12 ">
                                    <div id="accordion" role="tablist">
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingOne">
                                                <div>
                                                    <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        How fast is Bitcoin?
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div class="card-body">
                                                    It depends on the day, but on average it's currently 7 transactions per second. This is considered quite low. In fact there is <a href="https://blockchain.info/unconfirmed-transactions">often thousands of pending transactions</a>.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingTwo">
                                                <div>
                                                    <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Ipsum is simply dummy text of the printing?
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div class="card-body">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingThree">
                                                <div>
                                                    <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Simply dummy text of the printing and typesetting industry?
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div class="card-body">
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="iq-our-clients particles-bg yellow-bg iq-ptb-40">
                        <canvas id="canvas"></canvas>
                        <div className="container ">
                            <div className="row ">
                                <div className="col-lg-12 col-md-12 ">
                                    <div className="owl-carousel" data-nav-dots="false" data-nav-arrow="false" data-items="5" data-sm-items="3" data-lg-items="5" data-md-items="4" data-autoplay="true">
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/01.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/02.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/03.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/04.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/05.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/06.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/01.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/02.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/03.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/04.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/05.png" alt="#" /></a></div>
                                        <div className="item"> <a href="clients.html"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/06.png" alt="#" /></a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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
                                    <li style={{display: 'none'}}><a href="#"><i className="fa fa-github"></i></a></li>
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
