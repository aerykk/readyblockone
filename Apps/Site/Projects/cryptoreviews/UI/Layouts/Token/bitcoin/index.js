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
                <header className="simpal">
                    <div className="iq-header">
                        <div className="container white-bg" style={{'max-width': '1200px'}}>
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
                                            <li><a className="active" href="javascript:void(0)">HOME</a>
                                                <ul className="sub-menu">
                                                    <li><a className="active" href="#intro">Intro</a></li>
                                                    <li><a href="#similar">Similar</a></li>
                                                    <li><a href="#wallets">Wallets</a></li>
                                                    <li><a href="#market">Market</a></li>
                                                    <li><a href="#exchanges">Exchanges</a></li>
                                                    <li><a href="#history">History</a></li>
                                                    <li><a href="#social">Social</a></li>
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


                <section id="iq-home" className="iq-banner overview-block-pt iq-bg iq-bg-fixed iq-over-blue-90" style={{ background: "url(/Apps/Site/Projects/cryptoreviews/Assets/Other/images/banner/01.jpg)" }}>
                    <div className="container">
                        <div className="banner-text">
                            <div className="row flex-row-reverse">
                                <div className="col-lg-5 col-md-12">
                                    <div className="banner-form">
                                        <div className="form-icon">
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
                                    <a href="#" className="button white iq-mt-15"><strong>Exchanges:</strong> where to buy and sell</a>
                                    <br />
                                    <a href="#" className="button white iq-mt-15"><strong>Wallets:</strong> how to hold it</a>
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
                                            <div className="media">
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="media">
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="media">
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="media">
                                                <img className="mr-2" src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" alt="#" />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="main-content">
                    <section className="overview-block-ptb iq-need">
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


                    <section className="overview-block-ptb iq-bg iq-over-black-80 jarallax" style={{ 'background-image': "url('http://via.placeholder.com/1800x1200')", 'background-position': "center center" }}>
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
                                        <h3 className="title iq-tw-5 iq-mb-20">History</h3>
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


                    <section className="overview-block-pt iq-feature4 iq-bg iq-over-black-80 jarallax particles-bg" style={{ 'background-image': "url('http://via.placeholder.com/1800x1200')", 'background-position': "center center" }}>
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



                    <section className="iq-about1 iq-bg iq-over-black-80 jarallax quote-form quote-form-2 iq-mt-30" style={{
                        'background-image': "url('http://via.placeholder.com/2000x1080')",
                        'background-position': "left center"
                    }}>
                        <div className="container">
                            <div className="row h-100">
                                <div className="col-sm-12 quote-form">
                                    <div className="row">
                                        <div className="col-sm-5">
                                            <a href="http://partners.etoro.com/B10174_A73660_TClick.aspx" Target="_Top"><img className="img-fluid iq-img" border="0" src="http://partners.etoro.com/B10174_A73660_TGet.aspx" alt="" width="768" height="1024" style={{left: '-30px'}}/></a>
                                        </div>
                                        <div className="col-sm-7 iq-ptb-60 ">
                                            <div className="heading-left iq-font-white">
                                                <h3 className="title iq-tw-5 iq-mb-20 iq-font-white">Trading Simplified</h3>
                                                <p>There are any number of ways to trade cryptocurrencies. However, as a new &amp; emerging market, most are complicated. <br /><br />
                                                    That's why eToro created an all-in-one platform, to simplify trading for the average investor. <br /><br />
                                                    They're unique value prop is they let you follow and copy the strategies of experienced traders, what they call "social trading". <br /><br />
                                                    It's really easy to get started. As with anything, please do your own due diligence and only invest what you can afford to lose. <br /><br />
                                                    As a best practice, we recommend depositing and withdrawing, just so you know you can get funds in &amp; out without hassle. <br /><br />
                                                    Try eToro out, and if you like or don't like it let us know. 
                                                    <br /><br />
                                                    <a className="button iq-mt-25 float-right" href="https://readyblock.one/go/etoro">Go to eToro</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section hidden>
                        <a href="http://partners.etoro.com/B10521_A73660_TClick.aspx" Target="_Top"><img src="https://etoro-production.s3.amazonaws.com/partners/ads/1%20(3).JPG" style={{width: '100%'}} /></a>
                    </section>


                    <img border="0" src="http://partners.etoro.com/B10521_A73660_TGet.aspx" />

                    <section className="overview-block-ptb" style={{ "background-image": "url('images/bg/bg.png');", "background-position": "center center;" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20">Education</h3>
                                        <p>Here are the most highly rated books on Bitcoin.</p>
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
                                            <p dir="ltr"><span>Our first book is from Andreas Antonopoulos and is called "Mastering Bitcoin" and it does exactly what is says on the tin. This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
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
                                            <a className="button iq-mt-25 float-right bt-lg" href="https://readyblock.one/go/mb">Buy on Amazon</a>
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
                                            <h5 className="iq-tw-5"><a href="#">Mastering Bitcoin</a></h5>
                                            <h6><em>By: Andreas Antonopoulos</em></h6>
                                            <p dir="ltr"><span>Our first book is from Andreas Antonopoulos and is called "Mastering Bitcoin" and it does exactly what is says on the tin. This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
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
                                            <a className="button iq-mt-25 float-right bt-lg" href="https://readyblock.one/go/mb">Buy on Amazon</a>
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
                                            <h5 className="iq-tw-5"><a href="#">Mastering Bitcoin</a></h5>
                                            <h6><em>By: Andreas Antonopoulos</em></h6>
                                            <p dir="ltr"><span>Our first book is from Andreas Antonopoulos and is called "Mastering Bitcoin" and it does exactly what is says on the tin. This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
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
                                            <a className="button iq-mt-25 float-right bt-lg" href="https://readyblock.one/go/mb">Buy on Amazon</a>
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
                                            <h5 className="iq-tw-5"><a href="#">Mastering Bitcoin</a></h5>
                                            <h6><em>By: Andreas Antonopoulos</em></h6>
                                            <p dir="ltr"><span>Our first book is from Andreas Antonopoulos and is called "Mastering Bitcoin" and it does exactly what is says on the tin. This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
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
                                            <a className="button iq-mt-25 float-right bt-lg" href="https://readyblock.one/go/mb">Buy on Amazon</a>
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
                                        <h3 className="title iq-tw-5 iq-mb-20">Exchanges</h3>
                                        <p>So where can we buy &amp; sell Bitcoin? Which is most popular? Which is safest?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20">
                                            <img className="client-img" src="http://via.placeholder.com/300x100" alt="" />
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5">Binance</h4>
                                                <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"></a></li>
                                            <li className="list-inline-item"><a href="#">www.binance.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20">
                                            <img className="client-img" src="http://via.placeholder.com/300x100" alt="" />
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5">JD Scot</h4>
                                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"></a></li>
                                            <li className="list-inline-item"><a href="https://readyblock.one/go/bittrex">www.bittrex.com</a></li>
                                            <li><a className="button iq-mt-25 float-right" href="https://readyblock.one/go/bittrex">Go</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="table-responsive">
                                        <table className="table table-bordered iq-shopping-cart-table text-center">
                                            <thead>
                                                <tr>
                                                    <th>Rank</th>
                                                    <th>Exchange</th>
                                                    <th>Age</th>
                                                    <th>Hacks</th>
                                                    <th>Safety Rating</th>
                                                    <th>Details</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td><a href="#"><img src="http://via.placeholder.com/50x50" alt="img" /> Binance</a></td>
                                                    <td className="align-middle">2017</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        9
                                                    </td>
                                                    <td>
                                                        Moved from Hong Kong to Singapore to Malta. Relies on USDT (shady). Still relatively new and susceptible to hacks.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25" href="/">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">1</td>
                                                    <td><a href="#"><img src="http://via.placeholder.com/50x50" alt="img" /> Gemini</a></td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        10
                                                    </td>
                                                    <td>
                                                        Based in USA. Works directly with SEC. Holds own USD. No major problems yet. Has gone offline randomly during high activity.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25" href="/">Go</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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
                                        <h3 className="title iq-tw-5 iq-mb-20">Wallets</h3>
                                        <p>So where can we buy &amp; sell Bitcoin? Which is most popular? Which is safest?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="iq-clients-blog iq-mtb-15">
                                        <div className="media iq-pall-20">
                                            <img className="client-img" src="http://via.placeholder.com/300x100" alt="" />
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5">Jaxx</h4>
                                                <p>Binance is one of the newest contenders, but it's quickly become the largest cryptocurrency exchange in the world.</p>
                                            </div>
                                        </div>
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#"></a></li>
                                            <li className="list-inline-item"><a href="#">www.binance.com</a></li>
                                        </ul>
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
                                <div className="logo iq-mt-0 iq-mb-20"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/rbo-logo-with-title-inverted.png" alt="" /> </div>
                                <p className="iq-font-white">The world is changing. Are you ready?</p>
                            </div>
                            <div className="col-sm-7">
                                <ul className="iq-menu">
                                    <li><a href="http://readyblock.one/">Home</a></li>
                                    <li><a href="http://readyblock.one/network">Network</a></li>
                                    <li><a href="http://readyblock.one/company">Company</a></li>
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
