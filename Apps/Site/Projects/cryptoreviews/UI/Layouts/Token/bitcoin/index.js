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
                                        <h2 className="iq-tw-6">Bitcoin<small>Stats</small></h2>
                                        <p></p>
                                        <ul className="listing-hand iq-mt-15 iq-tw-5">
                                            <li className="iq-mt-20" style={{width: '100%'}}><strong>Released:</strong> 2009</li>
                                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Ledger:</strong> blockchain</li>
                                            <li className="iq-mt-20" style={{width: '100%'}}><strong>Architecture:</strong> bitcoin</li>
                                            <li className="iq-mt-20" style={{width: '100%'}}><strong>Type:</strong> currency</li>
                                        </ul>
                                        <br />
                                        <a hidden href="#media" className="button dark iq-mt-10">Media Centre</a>
                                        <a hidden href="#education" className="button dark iq-mt-10">Education Centre</a>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-12 align-self-center">
                                    <h1 className="iq-font-white iq-tw-6 iq-mb-10">What is <span className="iq-font-yellow">Bitcoin?</span></h1>
                                    
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
                                    <div className="owl-carousel" data-nav-dots="false" data-nav-arrow="false" data-items="6" data-sm-items="4" data-lg-items="6" data-md-items="5" data-autoplay="true" style={{'margin-top': '10px'}}>
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
                                            <a className="media" href="https://readyblock.one/review/btc">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/btc.png" style={{width: '40px'}} />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 1</small>Bitcoin
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="https://readyblock.one/review/eth">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/eth.png" style={{width: '40px'}} />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 2</small>Ethereum
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="https://readyblock.one/review/xrp">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/xrp.png" style={{width: '40px'}} />
                                                <div className="media-body">
                                                    <span className="iq-font-white ">
                                                        <small>RANK 3</small>Ripple
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a className="media" href="https://readyblock.one/review/bch">
                                                <img className="mr-2" src="/Apps/Site/Core/Assets/Tokens/bch.png" style={{width: '40px'}} />
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

                    <section id="history" className="overview-block-ptb iq-event iq-feature4 iq-additional">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title iq-mb-0">
                                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#history">History</a></h3>
                                        <p className="iq-mb-30">Bitcoin is the original cryptocurrency. It's the king daddy of crypto. It tooks the learnings of the cypher punk era in the 90s and built on it, combining blockchain, consensus and proof of work to create a safe to use currency with no double spending. Bitcoin was created in 2009 by Satoshi Nakamoto. Nobody knows who it was, if it was a group or an individual.</p>
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
                                    <p>Bitcoin has <strong>no official website or social networks</strong>, as it's ownerless. It has a core development team, but no organization management. Bitcoin.com is an unofficial portal by Roger Ver.</p>
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
                                                <tr>
                                                    <td>
                                                        <a href="https://readyblock.one/go/rcryptocurrency">
                                                            Reddit r/cryptocurrency
                                                        </a>
                                                    </td>
                                                    <td>
                                                        7/10
                                                    </td>
                                                    <td className="align-middle">
                                                        <ul class="iq-tags list-inline" style={{width: '240px'}}>
                                                            <li><span>Community</span></li>
                                                            <li><span>Market Info</span></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://readyblock.one/go/rbitcoinmarkets">
                                                            Reddit r/bitcoinmarkets
                                                        </a>
                                                    </td>
                                                    <td>
                                                        9/10
                                                    </td>
                                                    <td className="align-middle">
                                                        <ul class="iq-tags list-inline">
                                                            <li><span>Community</span></li>
                                                            <li><span>Market Info</span></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://readyblock.one/go/bitcointalk">
                                                            BitcoinTalk Forum
                                                        </a>
                                                    </td>
                                                    <td>
                                                        10/10
                                                    </td>
                                                    <td className="align-middle">
                                                        <ul class="iq-tags list-inline">
                                                            <li><span>SA</span></li>
                                                            <li><span>Communities</span></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        Every token has its own forum topic.
                                                    </td>
                                                </tr>
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
                                                <tr>
                                                    <td>
                                                        <a href="https://readyblock.one/go/cryptocurrencycalendar">
                                                            Cryptocurrency Calendar
                                                        </a>
                                                    </td>
                                                    <td>
                                                        9/10
                                                    </td>
                                                    <td className="align-middle">
                                                        <ul class="iq-tags list-inline">
                                                            <li><span>Market Info</span></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        Good for finding news before it hits reddit
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://readyblock.one/go/cryptocompare">
                                                            CryptoCompare
                                                        </a>
                                                    </td>
                                                    <td>
                                                        6/10
                                                    </td>
                                                    <td className="align-middle">
                                                        <ul class="iq-tags list-inline">
                                                            <li><span>Market Info</span></li>
                                                            <li><span>Tools</span></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        Their mining profit calculator is incorrect (doesn't consider increasing difficulty). They also exaggerate Japanese trading volume, as they're missing many exchanges.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <a href="https://readyblock.one/go/bitcoinity">
                                                            Coin Mastery
                                                        </a>
                                                    </td>
                                                    <td>
                                                        10/10
                                                    </td>
                                                    <td className="align-middle">
                                                        <ul class="iq-tags list-inline">
                                                            <li><span>FA</span></li>
                                                            <li><span>SA</span></li>
                                                            <li><span>TA</span></li>
                                                        </ul>
                                                    </td>
                                                    <td>
                                                        Fundament, sentiment &amp; technical analysis
                                                    </td>
                                                </tr>
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
                                        <p>If there's big news or problems with Bitcoin, we'll let you know here first.</p>
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
                                                <tr class="iq-cart-st">
                                                    <td>June 2, 2018</td>
                                                    <td>Exchange Notice</td>
                                                    <td>Both Binance and Bittrex are experimenting with their own USD pair (not based on Tether)</td>
                                                </tr>
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
                                                <tr class="iq-cart-st">
                                                    <td>May 10, 2018</td>
                                                    <td>Scam Notice</td>
                                                    <td>Giza ICO</td>
                                                </tr>
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
                                        <p>No cryptocurrencies are exactly alike. Each have pros and cons. We'll touch on some of those, but ultimately you'll have to do your own research to figure out which one is for you. But don't worry, we'll be here to guide you along with way.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="3" data-sm-items="3" data-lg-items="3" data-md-items="3" data-autoplay="false">
                                        <div class="item">
                                            <div class="iq-pricing">
                                                <span class="icon"><img src="/Apps/Site/Core/Assets/Tokens/btc.png" style={{width: '50px', marginTop: '-4px'}} /></span>
                                                <div class="pricing-header">
                                                    <h3 class="title">BTC</h3>
                                                    <span class="price-value">Bitcoin</span>
                                                </div>
                                                <ul class="pricing-content" style={{height: '200px'}}>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-checkmark-round"></i>Oldest</li>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-checkmark-round"></i>Core Team</li>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-close-round"></i>Visa-level Scale</li>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-close-round"></i>Smart Contracts</li>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-close-round"></i>Expensive Transactions (relatively)</li>
                                                </ul>
                                                <a class="button" href="https://readyblock.one/review/btc">Learn More</a>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="iq-pricing">
                                                <span class="icon"><img src="/Apps/Site/Core/Assets/Tokens/iota.png" style={{width: '50px', marginTop: '-4px'}} /></span>
                                                <div class="pricing-header">
                                                    <h3 class="title">IOTA</h3>
                                                    <span class="price-value">IOTA</span>
                                                </div>
                                                <ul class="pricing-content" style={{height: '200px'}}>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-checkmark-round"></i>Visa-level Scale (theoretically)</li>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-checkmark-round"></i>Free Transactions</li>
                                                </ul>
                                                <a class="button" href="https://readyblock.one/review/iota">Learn More</a>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="iq-pricing">
                                                <span class="icon"><img src="/Apps/Site/Core/Assets/Tokens/bch.png" style={{width: '50px', marginTop: '-4px'}} /></span>
                                                <div class="pricing-header">
                                                    <h3 class="title">BCH</h3>
                                                    <span class="price-value">Bitcoin Cash</span>
                                                </div>
                                                <ul class="pricing-content" style={{height: '200px'}}>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-checkmark-round"></i>Theoretically Scaleable</li>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-checkmark-round"></i>Cheap Transactions</li>
                                                    <li><i aria-hidden="true" class="iq-mr-10 ion-close-round"></i>Core Team</li>
                                                </ul>
                                                <a class="button" href="https://readyblock.one/review/bch">Learn More</a>
                                            </div>
                                        </div>
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
                                        <p>Bitcoin and blockchain can be confusing at times. We promise these videos will make it clearer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        <div class="item">
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
                                        <div class="item">
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
                                        <p>We've compiled a list of the only the top rated books on Bitcoin.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        <div class="item">
                                            <div className="iq-product grey-bg">
                                                <div className="pdt-image">
                                                    <img src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/mb.png" alt="" />
                                                    <ul className="pdt-icon">
                                                        <li><a href="https://readyblock.one/go/book/mb"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="pdt-dec">
                                                    <h5 className="iq-tw-5"><a href="https://readyblock.one/go/book/mb">Mastering Bitcoin</a></h5>
                                                    <h6><em>By: Andreas Antonopoulos</em></h6>
                                                    <br />
                                                    <p dir="ltr" style={{ height: '290px' }}><span>This is a great way to ease yourself into the more complex terminology under the hood of&nbsp;</span><a href="https://www.cryptocompare.com/coins/btc/overview">bitcoin</a><span>. The author's clear mastery of the topic goes a long way in his clear explanations to readers. You learn the basics of&nbsp;</span><a href="https://www.cryptocompare.com/coins/guides/how-does-a-bitcoin-transaction-work/">how bitcoin works and move through into the different transaction types&nbsp;</a><span>and why they are used - also a good look at multi-signature wallets and other such key bitcoin tech. Another bonus in the book are the clear diagrams the are easy to follow. A key primer for those wanting to get to grips with the tech in bitcoin and cryptocurrencies. New versions are updated all the time to stay up to date with the fast moving world of bitcoin.</span></p>
                                                    <div className="shop-price float-left iq-mt-10">
                                                        <strong className="iq-font-yellow">$22.50</strong>
                                                    </div>
                                                    <div className="iq-rating float-right iq-mt-10">
                                                        <ul className="list-inline float-right iq-ml-10">
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>
                                                    <br clear="both" />
                                                    <ul class="iq-tags list-inline">
                                                        <li><a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain">Blockchain</a></li>
                                                    </ul>
                                                    <br clear="both" />
                                                    <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/book/mb">Buy on Amazon</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div className="iq-product grey-bg">
                                                <div className="pdt-image">
                                                    <img src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/btfom.png" alt="" />
                                                    <ul className="pdt-icon">
                                                        <li><a href="https://readyblock.one/go/book/btfom"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="pdt-dec">
                                                    <h5 className="iq-tw-5"><a href="https://readyblock.one/go/book/btfom">Bitcoin The Future of Money</a></h5>
                                                    <h6><em>By: Dominic Frisby</em></h6>
                                                    <br />
                                                    <p dir="ltr" style={{ height: '290px' }}>Another key book on the Bitcoin space from the Author Dominic Frisby. The book tries to unravel the mystery of who exactly is Satoshi Nakamoto. Printed before Craig Wrights attempt at usurping the title - Dominic Frisby searches the length and breadth of the bitcoin world from meet ups to interviews with key people in the industry. As he unravels and explains how the industry works he moves through various participants giving the arguments for and against them being Satoshi Nakamoto - through insightful detective work and even looking at linguistic analysis. A thrilling read all round that gets to grips with Bitcoin's genesis and gently explains to the reader its potential and history.</p>
                                                    <div className="shop-price float-left iq-mt-10">
                                                        <strong className="iq-font-yellow">$18.99</strong>
                                                    </div>
                                                    <div className="iq-rating float-right iq-mt-10">
                                                        <ul className="list-inline float-right iq-ml-10">
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>
                                                    <br clear="both" />
                                                    <ul class="iq-tags list-inline">
                                                        <li><a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain">Blockchain</a></li>
                                                    </ul>
                                                    <br clear="both" />
                                                    <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/book/btfom">Buy on Amazon</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div className="iq-product grey-bg">
                                                <div className="pdt-image">
                                                    <img src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/tbb.png" alt="" />
                                                    <ul className="pdt-icon">
                                                        <li><a href="https://readyblock.one/go/book/tbb"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="pdt-dec">
                                                    <h5 className="iq-tw-5"><a href="https://readyblock.one/go/book/tbb">The Bitcoin Bible</a></h5>
                                                    <h6><em>By: Benjamin Guttmann</em></h6>
                                                    <br />
                                                    <p dir="ltr" style={{ height: '290px' }}>This is a sort of almanac of bitcoin stories with various angles and short but information-rich stories and snippets - various contributing authors BitcoinMagasine.com and Motherboard.com give the book its style and flavor. The book covers key people - the nature of VC funding in the industry - key partnerships that industry players have made - a look at mining chips - the wealth distribution effect in bitcoin and more. Again a clear style means the book is a pick up - read a chapter and learn something new to flesh out your understanding of another small corner of the bitcoin ecosystem. Well worth sticking on your shelf.</p>
                                                    <div className="shop-price float-left iq-mt-10">
                                                        <strong className="iq-font-yellow">$33.90</strong>
                                                    </div>
                                                    <div className="iq-rating float-right iq-mt-10">
                                                        <ul className="list-inline float-right iq-ml-10">
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>
                                                    <br clear="both" />
                                                    <ul class="iq-tags list-inline">
                                                        <li><a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain">Blockchain</a></li>
                                                    </ul>
                                                    <br clear="both" />
                                                    <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/book/tbb">Buy on Amazon</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div className="iq-product grey-bg">
                                                <div className="pdt-image">
                                                    <img src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/books/tsotb.png" alt="" />
                                                    <ul className="pdt-icon">
                                                        <li><a href="https://readyblock.one/go/book/tsotb"><i className="fa fa-cart-plus" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="pdt-dec">
                                                    <h5 className="iq-tw-5"><a href="https://readyblock.one/go/book/tsotb">The Science of the Blockchain</a></h5>
                                                    <h6><em>By: Roger Wattenhofer</em></h6>
                                                    <br />
                                                    <p dir="ltr" style={{ height: '290px' }}>If you want to learn the <strong>mathematical foundations about the blockchain</strong> then the must read is: The Science of the Blockchain. But be warned: that book is very mathematical. It uses heavy mathematical notation and it does not explain too much in plain language.</p>
                                                    <div className="shop-price float-left iq-mt-10">
                                                        <strong className="iq-font-yellow">$19.90</strong>
                                                    </div>
                                                    <div className="iq-rating float-right iq-mt-10">
                                                        <ul className="list-inline float-right iq-ml-10">
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-half-o" aria-hidden="true"></i></li>
                                                            <li className="list-inline-item"><i className="fa fa-star-o" aria-hidden="true"></i></li>
                                                        </ul>
                                                    </div>
                                                    <br clear="both" />
                                                    <ul class="iq-tags list-inline">
                                                        <li><a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain">Blockchain</a></li>
                                                        <li><a href="https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=blockchain+technical">Technical</a></li>
                                                    </ul>
                                                    <br clear="both" />
                                                    <a className="button iq-mt-25 float-right bt-lg background-gradient-3" href="https://readyblock.one/go/book/tsotb">Buy on Amazon</a>
                                                </div>
                                            </div>
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
                                            <a href="https://readyblock.one/go/binance"><img className="client-img" src="/Apps/Site/Core/Assets/Exchanges/binance.svg" alt="" /></a>
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
                                            <a href="https://readyblock.one/go/bittrex"><img className="client-img" src="/Apps/Site/Core/Assets/Exchanges/bittrex.png" /></a>
                                            <div className="media-body">
                                                <h4 className="mt-0 iq-tw-5">Bittrex</h4>
                                                <p>Bittrex was the most popular exchange (by volume) until Binance dethrowned them in late 2017. They still have one of the widest selection of altcoins to trade.</p>
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
                                                    <td>
                                                        <a href="https://readyblock.one/go/binance">
                                                            <img src="/Apps/Site/Core/Assets/Exchanges/binance.svg" alt="img" style={{width: '50px'}} /> 
                                                            Binance
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2017</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        9/10
                                                    </td>
                                                    <td className="text-left">
                                                        Moved from Hong Kong to Singapore to Malta. Relies on USDT (shady). Still relatively new and susceptible to hacks.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/binance">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">2</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/gemini">
                                                            <img src="/Apps/Site/Core/Assets/Exchanges/gemini.png" alt="img" style={{ width: '50px' }} /> 
                                                            Gemini
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        10/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in USA (pretty safe). Works directly with SEC (good). Holds own USD (good). No major problems yet. Has gone offline randomly during high activity.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/gemini">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">3</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/kraken">
                                                            Kraken
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2014</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        10/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in USA (pretty safe). Holds own USD (good). No major problems yet. Focus on security. Goes offline often. Really slow trading. Really slow support.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/kraken">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">4</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/coinbase">
                                                            Coinbase (GDAX)
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2014</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        10/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in USA (pretty safe). Works directly with SEC (good). Holds own USD (good). Keeps going offline during bitcoin crashes but not surges (suggesting manipulation). Typically more expensive during booms.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/coinbase">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">6</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/bitfinex">
                                                            Bitfinex
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2015</td>
                                                    <td className="align-middle">1</td>
                                                    <td className="align-middle">
                                                        6/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in ???. Never sure where they are as they keep relocating. Internal connection to Tether (USDT) with potentially shady behaviour.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/bitfinex">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">5</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/bitstamp">
                                                            Bitstamp
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2014</td>
                                                    <td className="align-middle">1</td>
                                                    <td className="align-middle">
                                                        8/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in UK (pretty safe). Holds own USD (good). Focus on security. Hot wallet hacked once.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/bitstamp">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">6</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/bitflyer">
                                                            Bitflyer
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        8/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in Japan. Accepts international customers. Licensed by government.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/bitflyer">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">7</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/bitthumb">
                                                            Bitthumb
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        8/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in South Korea. Accepts international. Not much known yet. Has been audited by gov (good).
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/bitthumb">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">8</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/kucoin">
                                                            Kucoin
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        8/10
                                                    </td>
                                                    <td className="text-left">
                                                        Very new, susceptible to hacks. Offers rev share. Trading engine is a bit slow during high load.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/kucoin">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">9</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/huobi">
                                                            Huobi
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        8/10
                                                    </td>
                                                    <td className="text-left">
                                                        Based in Singapore. Very new, susceptible to hacks. Offers rev share. Good volume, unique tokens. Being chinese focused is concerning.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/huobi">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">10</td>
                                                    <td>
                                                        <a href="https://readyblock.one/go/idex">
                                                            IDEX
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2017</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        10/10
                                                    </td>
                                                    <td className="text-left">
                                                        Decentralized exchange (DEX). Generally safe from sweeping hacks, but potientally susceptible to phishing hacks so be careful clicking links.
                                                    </td>
                                                    <td>
                                                        <a className="button iq-mt-25 background-gradient-3" href="https://readyblock.one/go/idex">Go</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center"></td>
                                                    <td>
                                                        <a href="#">
                                                            EtherDelta
                                                        </a>
                                                    </td>
                                                    <td className="align-middle">2016</td>
                                                    <td className="align-middle">0</td>
                                                    <td className="align-middle">
                                                        0/10
                                                    </td>
                                                    <td className="text-left">
                                                        <strong>Do not use.</strong> It was originally created by a single developer, Zach, and sold to new management. They did not update it for a while, were hacked, ignored victims and did not reimburse. They then proceeded to do an ICO and disappear for months.
                                                    </td>
                                                    <td>
                                                        <div className="button iq-mt-25 bg-black">Warning</div>
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
                                        <p>What are the best software wallets to store Bitcoin?</p>
                                        <p><strong>Software Wallet:</strong> an app for desktop or mobile that stores cryptocurrency (usually less safe than a hardware wallet unless the device has TEE (trusted execution environment).</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        <div class="item">
                                            <div className="iq-clients-blog iq-mtb-15">
                                                <div className="media iq-pall-20" style={{ height: '220px' }}>
                                                    <a href="https://readyblock.one/go/jaxx"><img className="client-img" src="/Apps/Site/Core/Assets/Wallets/jaxx.png" alt="" /></a>
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
                                        <div class="item">
                                            <div className="iq-clients-blog iq-mtb-15">
                                                <div className="media iq-pall-20" style={{ height: '220px' }}>
                                                    <a href="https://readyblock.one/go/exodus"><img className="client-img" src="/Apps/Site/Core/Assets/Wallets/exodus.png" alt="" /></a>
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
                            </div>
                        </div>
                    </section>


                    <section className="iq-clients overview-block-ptb iq-page-shop">
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
                                <div class="col-12 second-carousel">
                                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                                        <div class="item">
                                            <div className="iq-clients-blog iq-mtb-15">
                                                <div className="media iq-pall-20" style={{ height: '220px' }}>
                                                    <a href="https://readyblock.one/go/trezor"><img className="client-img" src="/Apps/Site/Core/Assets/Wallets/trezor.png" alt="" /></a>
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
                                        <div class="item">
                                            <div className="iq-clients-blog iq-mtb-15">
                                                <div className="media iq-pall-20" style={{ height: '220px' }}>
                                                    <a href="https://readyblock.one/go/ledger"><img className="client-img" src="/Apps/Site/Core/Assets/Wallets/ledger.png" alt="" /></a>
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
                                                        What's up with all the forks?
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div class="card-body">
                                                    A fork is when an individual or organization starts going a different direction than the original chain (usually due to different source code). This happened with Bitcoin a lot due to improvements wanting to be made that the Bitcoin core team either didn't get to yet or do not support. Since Bitcoin is the dominate cryptocurrency that most people hold, it makes for a good chain to fork. And since most people are holding not selling, it leads to low liquidity, which is sometimes preceived as strength (people not wanting to sell). This leads to a higher market cap. Thus, some organizations are looking at it as quick way to make money.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingThree">
                                                <div>
                                                    <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Can Bitcoin die?
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                                <div class="card-body">
                                                    It's possible in theory, but very very unlikely for Bitcoin to die at this point. The worst thing that could happen is the source code is hacked, but miners would quickly react and ignore the corrupt source code. Since it's deployed to thousands of computers world wide, it's unlikely every single one will stop mining for the foreseeable future. Even if it fades away, there will always be somebody willing to bet on a comeback.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingFour">
                                                <div>
                                                    <a class="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        What is a Bitcoin maximalist?
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapseFour" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
                                                <div class="card-body">
                                                    A maximalist is somebody who believes Bitcoin is the only solution needed. They are typically early adopters and see blockchain's major use case as a currency, and Bitcoin as the defacto implementation.
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card">
                                            <div class="card-header" role="tab" id="headingFive">
                                                <div>
                                                    <a class="collapsed" data-toggle="collapse" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                        Who created Bitcoin?
                                                    </a>
                                                </div>
                                            </div>
                                            <div id="collapseFive" class="collapse" role="tabpanel" aria-labelledby="headingFive" data-parent="#accordion">
                                                <div class="card-body">
                                                    Nobody knows for sure. One of the best guesses is Hal Finney, the first user except Satoshi. Unforunately he passed away in 2014. Since then, Craig Wright has attempted to claim the fame, but others such as Vitalik Buterin have been quick to point of the unlikelihood of that being true.
                                                </div>
                                            </div>
                                        </div>
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
