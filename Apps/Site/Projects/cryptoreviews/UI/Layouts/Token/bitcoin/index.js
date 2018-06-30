import data from './data'
import EtoroBlock1 from '../../../Components/EtoroBlock1'

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
                <a href="https://readyblock.one" target="_blank" class="topdisplay"></a>

                <header className="simpal">
                    <div className="iq-header">
                        <div className="container white-bg" style={{ 'max-width': '1200px', 'border-radius': '5px 5px 0 0' }}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="logo">
                                        <a href="/"><img className="img-fluid" src={data.header.logo} alt="" /></a>
                                        <br />
                                        <div className="header-org">By <a href="https://readyblock.one"><img className="price-main-img" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/rbo-logo-with-title.png" alt="" /></a></div>
                                    </div>
                                    <nav>
                                        <a id="resp-menu" className="responsive-menu" href="/"><i className="fa fa-reorder"></i> Menu</a>
                                        <ul className="menu text-right">
                                            <li><a href="javascript:void(0)">Home</a>
                                                <ul className="sub-menu">
                                                    <li><a href="/#intro">Intro</a></li>
                                                    <li><a href="/#history">History</a></li>
                                                    <li><a href="/#quick">Quick Links</a></li>
                                                    <li><a href="/#compare">Compare</a></li>
                                                    <li><a href="/#media">Media Centre</a></li>
                                                    <li><a href="/#education">Education Centre</a></li>
                                                    <li><a href="/#exchanges">Exchanges</a></li>
                                                    <li><a href="/#wallets">Wallets</a></li>
                                                    <li><a href="/#market">Market</a></li>
                                                    <li><a href="/#faq">FAQ</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0)">Network</a>
                                                <ul className="sub-menu">
                                                    <li><a href="javascript:void(0)">Reviews <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                                                        <ul>
                                                            <li><a href="https://readyblock.one/review/btc">Bitcoin (BTC)</a></li>
                                                            <li><a href="https://readyblock.one/review/eth">Ethereum (ETH)</a></li>
                                                            <li><a href="https://readyblock.one/review/xrp">Ripple (XRP)</a></li>
                                                            <li><a href="https://readyblock.one/review/bch">Bitcoin Cash (BCH)</a></li>
                                                            <li><a href="https://readyblock.one/review/ltc">Litecoin (LTC)</a></li>
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
                            <div className="row flex-row-reverse">
                                <div className="col-lg-5 col-md-12">
                                    <div className="banner-form">
                                        <div className="form-icon background-gradient-3">
                                            <img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/icon.png" alt="#" />
                                        </div>
                                        <h2 className="iq-tw-6">{data.name} <small>Stats</small></h2>
                                        <p></p>
                                        <ul className="listing-hand iq-mt-15 iq-tw-5">
                                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Released:</strong> {data.highlight.stats.released}</li>
                                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Ledger:</strong> {data.highlight.stats.ledger}</li>
                                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Architecture:</strong> {data.highlight.stats.architecture}</li>
                                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Type:</strong> {data.highlight.stats.type}</li>
                                        </ul>
                                        <br />
                                        <a hidden href="#media" className="button dark iq-mt-10">Media Centre</a>
                                        <a hidden href="#education" className="button dark iq-mt-10">Education Centre</a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 align-self-center">
                                    <h1 className="iq-font-white iq-tw-6 iq-mb-10">What is <span className="iq-font-yellow">{data.name}?</span></h1>

                                    <a href="/#history" className="button white iq-mt-15"><strong>History:</strong> how it all began</a>
                                    <br />
                                    <a href="/#quick" className="button white iq-mt-15"><strong>Quick Links:</strong> find things quickly</a>
                                    <br />
                                    <a href="/#exchanges" className="button white iq-mt-15"><strong>Exchanges:</strong> where to buy and sell</a>
                                    <br />
                                    <a href="/#wallets" className="button white iq-mt-15"><strong>Wallets:</strong> how to hold it</a>
                                    <br />
                                    <a href="/#media" className="button white iq-mt-15"><strong>Media &amp; Education Centre:</strong> learn more through videos, books, etc.</a>
                                    <br />
                                    <a href="/#faq" className="button white iq-mt-15"><strong>FAQ:</strong> frequently asked questions</a>
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
                                        {data.tokens.items.map((item) => (
                                            <div className="item">
                                                <a className="media" href={"https://readyblock.one/review/" + item.symbol}>
                                                    <img className="mr-2" src={"/Apps/Site/Core/Assets/Tokens/" + item.symbol + ".png"} style={{ width: '40px' }} />
                                                    <div className="media-body">
                                                        <span className="iq-font-white ">
                                                            <small>RANK {item.rank}</small>{item.name}
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="main-content">

                    <section id="history" className="overview-block-ptb iq-event iq-feature4 iq-additional">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#history">History</a></h3>
                                        {data.history.content}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="eventone-tab" data-toggle="tab" href="#eventone" role="tab" aria-controls="eventone" aria-selected="true">2008-2009</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="eventwo-tab" data-toggle="tab" href="#eventwo" role="tab" aria-controls="eventwo" aria-selected="false">2010-2012</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="eventhree-tab" data-toggle="tab" href="#eventhree" role="tab" aria-controls="eventhree" aria-selected="false">2013</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="eventfour-tab" data-toggle="tab" href="#eventfour" role="tab" aria-controls="eventfour" aria-selected="false">2014-2016</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="evenfive-tab" data-toggle="tab" href="#evenfive" role="tab" aria-controls="evenfive" aria-selected="false">2017</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="evensix-tab" data-toggle="tab" href="#evensix" role="tab" aria-controls="evensix" aria-selected="false">2018</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content iq-mt-30" id="myTabContent">
                                        <div class="tab-pane fade show active" id="eventone" role="tabpanel" aria-labelledby="eventone-tab">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h5>2008: The Year It All Began</h5>
                                                    <br /><p><strong>August 2008</strong><br />Neil Kin, Vladimir Oksman and Charles Bry apply for an encryption patent application. Not only did they deny any connection to Satoshi Nakamoto, the alleged mastermind behind Bitcoin, but they also registered the site Bitcoin.org in the same month itself, buying the domain name anonymously over anonymousspeech.com</p>
                                                    <br /><p><strong>October 2008</strong><br />Despite Kin, Oksman and Bry trying to sabotage Bitcoin, Nakamoto went ahead to release his white paper which depicted his idea for a purely peer-to peer version of electronic cash. He provided the basic fundamental solution to the problem of virtual money being copied, giving electronic cash like Bitcoin the indispensable foundation to grow legitimately.</p>
                                                    <br /><br /><h5>2009: The Rise of Mining</h5>
                                                    <br /><p><strong>January 2009</strong><br />The initial mining of Bitcoins began with the first block ‘Genesis’ being launched. Later in the month, the first transaction took place between Satoshi and Hal Finney who is a developer and a cryptographic artist.</p>
                                                    <br /><p><strong>October 2009</strong><br />BTC received its traditional equivalent of currencies. The New Liberty Standard established the value as 1$ = 1309 BTC. The equation took into consideration the cost of electricity that was required to run the computer that was used to create the bitcoins in the first place.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="eventwo" role="tabpanel" aria-labelledby="eventwo-tab">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h5>2010: The Chaos Theory</h5>
                                                    <br /><p><strong>May 2010</strong><br />Laslo Hanyecz, a programmer from Florida sent 10,000 Bitcoins to a volunteer in England who spent about 25$ to order Hanycez a pizza from Papa John’s. One of the most major milestones in the history of Bitcoin, that pizza is valued at 1,961,034 pounds today.</p>
                                                    <br /><p><strong>August 2010</strong><br />A vulnerability in how the system verifies the value of Bitcoin is discovered and the organization gets hacked out of 184 Billion Bitcoins. The value of the currency that had risen to $1 in June, drops through the floor.</p>
                                                    <br /><p><strong>October 2010</strong><br />Bitcoin is thrown under the negative spotlight with inter-governmental group publishing a report on money laundering using new payment methods. The report was published right after discovering other vulnerabilities in the blockchain in September after the hack in August.</p>
                                                    <br /><p><strong>November 2010</strong><br />BTC reaches the 1 Mil$ mark. Based on the number of Bitcoins in circulation at the time, the valuation leads to a surge in the BTC value to $0.50/BTC.</p>
                                                    <br /><p><strong>January 2011</strong><br />The Silk Road, an illicit drugs marketplace which used Bitcoin as an untraceable way to buy and sell drugs online, is established.</p>
                                                    <br /><p><strong>February 2011</strong><br />Bitcoin reaches parity with the US Dollar, for the first time in its history. By June 2011, 1 BTC = $31, giving the currency a market cap of almost 206$ million.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="eventhree" role="tabpanel" aria-labelledby="eventhree-tab">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h5>2013: “Bitcoins Accepted Here”</h5>
                                                    <br /><br /><p><strong>June 2013</strong><br />After BTC market capitalization reached an all-time high of $1bn, Bitcoin Forum Founder Allinvain reports having 25,000 BTC stolen from his digital wallet. This marked the first major BTC theft, with a dollar equivalent of $375,000 being stolen at that time.</p>
                                                    <br /><p><strong>August 2013</strong><br />Federal Judge Mazzant backed Bitcoin by saying “It is clear that Bitcoin can be used as money to purchase goods and services” in a case against Trendon Shavers, the so-called ‘Bernie Madoff’ of Bitcoin.</p>
                                                    <br /><p><strong>November 2013</strong><br />With the US Senate holding its first hearing on the digital currency, the price of BTC escalated to 700$ along with Bitcoin receiving the blessing of Ben Bernanke, the chairman of the Federal Reserve.</p>
                                                    <br /><p><strong>December 2013</strong><br />People’s Bank of China derides the usage of Bitcoin as currency be saying it has no ‘real meaning’ and should not be given the same status as of fiat cash, and subsequently bars Chinese financial institutions from handling BTC transactions.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade show" id="eventfour" role="tabpanel" aria-labelledby="eventfour-tab">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h5>2014: Increments in Storage</h5>
                                                    <br /><p><strong>June 2014</strong><br />Bitcoin can no longer be considered as a “Currency for Criminals” with the US Govt auctioning off more than 29,000 bitcoins seized from The Silk Road. The use of Bitcoin often means that the identity of the user can be established.</p>
                                                    <br /><p><strong>August 2014</strong><br />George Osborne, the Chancellor of Exchequer, along with HM Treasury established their positive outlook on the BTC with a purchase of 20 pounds worth of Bitcoin and announced HM Treasury’s Call for Information on digital currencies. This offered digital currency businesses the chance to draw attention to the risks, benefits and give them the chance to potentially influence future Government policy.</p>
                                                    <br /><p><strong>December 2014</strong><br />Technology powerhouse Microsoft began accepting Bitcoins as payment. They could be used to buy games and videos on the X-Box, add apps and services to Windows phones or to buy Microsoft software.</p>
                                                    <br /><br /><p><strong>Early 2015 - Mid 2016: The Slow and Steady Rise of BTC</strong></p>
                                                    <br /><p>In this one and a half year, BTC slowly scaled up the charts to reach a value close 770$ by the June 2016, where it started with a lowly value 177$ in January 2015. The number of miners, developers associated with Bitcoin grew exponentially in this one and a half year</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="evenfive" role="tabpanel" aria-labelledby="evenfive-tab">
                                            <div class="row">
                                                <div class="col-12">
                                                    <h5>2017: The Bitcoin Boom</h5>
                                                    <br /><p>Come 2017 and Bitcoin starts breaking through the glass ceiling. It hit a high of almost 2900$ in the first half of 2017 itself. With Japan introducing new rules for digital currency and China letting down its guard a little, the worldwide demand for digital currency soared, leading to hype-cycle which in turn meant a bigger boom for the Bitcoin industry!</p>
                                                    <br /><br /><h5>The birth of Bitcoin Cash</h5>
                                                    <br /><p>August 1 saw the birth of a brand-new cryptocurrency: “Bitcoin Cash,” sometimes referred to as “Bcash” and using the currency tickers “BCH” or “BCC.”</p>
                                                    <br /><p>Bitcoin Cash, initially defined by the Bitcoin ABC software implementation, was set to fork on August 1 at 12:20 p.m. UTC. Though, because of how Bitcoin nodes measure time, the actual fork happened a little bit later.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="evensix" role="tabpanel" aria-labelledby="evensix-tab">
                                            <div class="row">
                                                <h5>2018: The Correction</h5>
                                                <br clear="both" />
                                                <br /><p>2019 has been the year of correcting after major ethusiasm.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="quick" className="overview-block-ptb iq-feature4 iq-additional">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 heading-title iq-mb-0">
                                    <h3 className="title iq-tw-5 iq-mb-20"><a href="#quick">Quick Links</a></h3>
                                </div>
                                <div className="col-6 iq-cart_total heading-left">
                                    <h4 class="iq-mb-30 title iq-tw-5">Social Networks</h4>
                                    <br />
                                    {data.social.content}
                                    <br /><br />
                                </div>
                                <div className="col-12 iq-cart_total">
                                    <h4 class="iq-mb-30 title iq-tw-5">Discussion Forums</h4>
                                    <div className="table-responsive">
                                        <table className="table table-bordered iq-shopping-cart-table">
                                            <thead>
                                                <tr>
                                                    <th width="20%">Name</th>
                                                    <th>Rating</th>
                                                    <th>Categories</th>
                                                    <th width="50%">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.quickLinks.forums.items.map((item) => (
                                                    <tr>
                                                        <td>
                                                            <a href={item.link}>
                                                                {item.name}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            {item.rating}
                                                        </td>
                                                        <td className="align-middle">
                                                            <ul class="iq-tags list-inline" style={{ width: '240px' }}>
                                                                {item.tags.map((tag) => (
                                                                    <li><span>{tag}</span></li>
                                                                ))}
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            {item.notes}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-12 iq-cart_total">
                                    <h4 class="iq-mb-30 title iq-tw-5">Other</h4>
                                    <div className="table-responsive">
                                        <table className="table table-bordered iq-shopping-cart-table">
                                            <thead>
                                                <tr>
                                                    <th width="20%">Name</th>
                                                    <th>Rating</th>
                                                    <th>Categories</th>
                                                    <th width="50%">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.quickLinks.other.items.map((item) => (
                                                    <tr>
                                                        <td>
                                                            <a href={item.link}>
                                                                {item.name}
                                                            </a>
                                                        </td>
                                                        <td>
                                                            {item.rating}
                                                        </td>
                                                        <td className="align-middle">
                                                            <ul class="iq-tags list-inline" style={{ width: '240px' }}>
                                                                {item.tags.map((tag) => (
                                                                    <li><span>{tag}</span></li>
                                                                ))}
                                                            </ul>
                                                        </td>
                                                        <td>
                                                            {item.notes}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="alerts" className="iq-clients overview-block-ptb">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#alerts">Notification Centre</a></h3>
                                        {data.notifications.content}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div class="iq-cart_total heading-left">
                                        <h4 class="iq-mb-30 title iq-tw-5">Alerts</h4>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th width="20%">Date</th>
                                                    <th width="20%">Type</th>
                                                    <th>Info</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.notifications.alerts.items.map((item) => (
                                                    <tr class="iq-cart-st">
                                                        <td>{item.date}</td>
                                                        <td>{item.type}</td>
                                                        <td>{item.content}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div class="iq-cart_total heading-left">
                                        <br />
                                        <h4 class="iq-mb-30 title iq-tw-5">Warnings &amp; Scams</h4>
                                        <table class="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th width="20%">Date</th>
                                                    <th width="20%">Type</th>
                                                    <th>Info</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.notifications.alerts.items.map((item) => (
                                                    <tr class="iq-cart-st">
                                                        <td>{item.date}</td>
                                                        <td>{item.type}</td>
                                                        <td>{item.content}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="compare" className="overview-block-ptb iq-feature4 iq-additional iq-page-shop">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#compare">Compare</a></h3>
                                        {data.compare.content}
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="3" data-sm-items="3" data-lg-items="3" data-md-items="3" data-autoplay="false">
                                        {data.compare.items.map((item) => (
                                            <div class="item">
                                                <div class="iq-pricing">
                                                    <span class="icon"><img src={"/Apps/Site/Core/Assets/Tokens/" + item.symbol + ".png"} style={{ width: '50px', marginTop: '-4px' }} /></span>
                                                    <div class="pricing-header">
                                                        <h3 class="title">{item.symbol.toUpperCase()}</h3>
                                                        <span class="price-value">{item.name}</span>
                                                    </div>
                                                    <ul class="pricing-content" style={{ height: '200px' }}>
                                                        {item.notes.map((note) => (
                                                            <li><i aria-hidden="true" class={"iq-mr-10 " + (note.checked ? "ion-checkmark-round" : "ion-close-round")}></i>{note.text}</li>
                                                        ))}
                                                    </ul>
                                                    <a class="button" href={item.link}>Learn More</a>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section id="media" className="overview-block-ptb iq-page-shop" style={{ "background-image": "url('images/bg/bg.png');", "background-position": "center center;" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#media">Media Centre</a></h3>
                                        {data.media.content}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        {data.media.items.map((item) => (
                                            <div class="item">
                                                <div class="popup-gallery play-video">
                                                    <div class="video-img"> <img src={item.thumbnail} class="img-fluid" /> </div>
                                                    <div class="video play"><a class="popup-youtube" href={item.video}><i class="fa fa-youtube-play" aria-hidden="true"></i> </a></div>
                                                </div>
                                                <div class="iq-news-detai iq-pt-15">
                                                    <div class="news-title"> <h5 class="iq-tw-5">{item.title}</h5> </div>
                                                    <div class="news-content">
                                                        <h6 class="iq-tw-6">{item.subtitle}</h6>
                                                        <br />
                                                        {item.content}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <img border="0" src="http://partners.etoro.com/B10521_A73660_TGet.aspx" />

                    <section id="education" className="overview-block-ptb iq-page-shop" style={{ "background-image": "url('images/bg/bg.png');", "background-position": "center center;" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#education">Education Centre</a></h3>
                                        {data.education.content}
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        {data.education.books.map((item) => (
                                            <div class="item">
                                                <div className="iq-product grey-bg">
                                                    <div className="pdt-image">
                                                        <img src={item.thumbnail} alt="" />
                                                        <ul className="pdt-icon">
                                                            <li><a href={item.link}><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="pdt-dec">
                                                        <h5 className="iq-tw-5"><a href={item.link}>{item.title}</a></h5>
                                                        <h6><em>{item.subtitle}</em></h6>
                                                        <br />
                                                        {item.content}
                                                        <div className="shop-price float-left iq-mt-10">
                                                            <strong className="iq-font-yellow">{item.price}</strong>
                                                        </div>
                                                        <div className="iq-rating float-right iq-mt-10">
                                                            <ul className="list-inline float-right iq-ml-10">
                                                                {[...Array(Math.floor(item.rating))].map(() => (
                                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                ))}
                                                                {[...Array(5 - Math.floor(item.rating))].map(() => (
                                                                    <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <br clear="both" />
                                                        <ul class="iq-tags list-inline">
                                                            {item.tags.map((tag) => (
                                                                <li><a href={tag.link}>{tag.title}</a></li>
                                                            ))}
                                                        </ul>
                                                        <br clear="both" />
                                                        <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href={item.link}>Buy on Amazon</a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
                                        {data.exchanges.content}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {data.exchanges.spotlight.map((item) => (
                                    <div className="col-sm-6">
                                        <div className="iq-clients-blog iq-mtb-15">
                                            <div className="media iq-pall-20" style={{ height: '220px' }}>
                                                <a href={item.link}><img className="client-img" src={item.thumbnail} alt="" /></a>
                                                <div className="media-body">
                                                    <h4 className="mt-0 iq-tw-5">{item.title}</h4>
                                                    {item.content}
                                                </div>
                                            </div>
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><a href={item.link}>{item.domain}</a></li>
                                                <li className="list-inline-item list-item-go"><a className="button iq-mt-25 float-right" href={item.link}>Go to {item.title}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
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
                                                    <th>Notes</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {data.exchanges.items.map((item) => (
                                                    <tr>
                                                        <td className="text-center">{item.rank}</td>
                                                        <td>
                                                            <a href={item.link}>
                                                                <img src={item.thumbnail} alt="img" style={{ width: '50px' }} />
                                                                {item.title}
                                                            </a>
                                                        </td>
                                                        <td className="align-middle">{item.age}</td>
                                                        <td className="align-middle">{item.hacks}</td>
                                                        <td className="align-middle">
                                                            {item.safety}
                                                        </td>
                                                        <td className="text-left">
                                                            {item.notes}
                                                        </td>
                                                        <td>
                                                            {item.link && (
                                                                <a className="button iq-mt-25 background-gradient-3" href={item.link}>Go</a>
                                                            )}
                                                            {!item.link && (
                                                                <p>Warning</p>
                                                            )}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <EtoroBlock1 />


                    <section hidden class="overview-block-ptb">
                        <div class="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#market">Market</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="btcwdgt-chart"></div>
                                </div>
                                <div class="col-lg-6 iq-r-mt-40">
                                    <div class="btcwdgt-news"></div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section id="wallets" className="iq-clients overview-block-ptb iq-page-shop">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#wallets">Software Wallets</a></h3>
                                        {data.softwareWallets.content}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        {data.softwareWallets.items.map((item) => (
                                            <div class="item">
                                                <div className="iq-clients-blog iq-mtb-15">
                                                    <div className="media iq-pall-20" style={{ height: '220px' }}>
                                                        <a href={item.link}><img className="client-img" src={item.thumbnail} alt="" /></a>
                                                        <div className="media-body">
                                                            <h4 className="mt-0 iq-tw-5"><a href={item.link}>{item.title}</a></h4>
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href="#"></a></li>
                                                        <li className="list-inline-item"><a href={item.link}>{item.domain}</a></li>
                                                        <li className="list-inline-item list-item-go"><a className="button iq-mt-25" href={item.link}>Go to {item.company}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="iq-clients overview-block-ptb iq-page-shop">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#wallets">Hardware Wallets</a></h3>
                                        {data.hardwareWallets.content}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        {data.hardwareWallets.items.map((item) => (
                                            <div class="item">
                                                <div className="iq-clients-blog iq-mtb-15">
                                                    <div className="media iq-pall-20" style={{ height: '220px' }}>
                                                        <a href={item.link}><img className="client-img" src={item.thumbnail} alt="" /></a>
                                                        <div className="media-body">
                                                            <h4 className="mt-0 iq-tw-5"><a href={item.link}>{item.title}</a></h4>
                                                            {item.content}
                                                        </div>
                                                    </div>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href="#"></a></li>
                                                        <li className="list-inline-item"><a href={item.link}>{item.domain}</a></li>
                                                        <li className="list-inline-item list-item-go"><a className="button iq-mt-25" href={item.link}>Go to {item.company}</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ))}
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
                                        {data.faq.content}
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-lg-12 col-md-12 ">
                                    <div id="accordion" role="tablist">
                                        {data.faq.items.map((item) => (
                                            <div class="card">
                                                <div class="card-header" role="tab" id={"heading" + item.id}>
                                                    <div>
                                                        <a class={item.collapsed ? "collapsed" : ""} data-toggle="collapse" href={"#collapse" + item.id}  aria-expanded="true" aria-controls={"collapse" + item.id}>
                                                            {item.question}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div id={"collapse" + item.id} class={item.collapsed ? "collapse" : "collapse show"} role="tabpanel" aria-labelledby={"heading" + item.id} data-parent="#accordion">
                                                    <div class="card-body">
                                                        {item.answer}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section hidden className="iq-our-clients particles-bg yellow-bg iq-ptb-40">
                        <canvas id="canvas"></canvas>
                        <div className="container ">
                            <div className="row ">
                                <div className="col-lg-12 col-md-12 ">
                                    <div className="owl-carousel" data-nav-dots="false" data-nav-arrow="false" data-items="5" data-sm-items="3" data-lg-items="5" data-md-items="4" data-autoplay="true">
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/01.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/02.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/03.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/04.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/05.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/06.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/01.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/02.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/03.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/04.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/05.png" alt="#" /></a></div>
                                        <div className="item"> <a href="#"><img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/clients/white/06.png" alt="#" /></a></div>
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
