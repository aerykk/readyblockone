const React = require('react')

export default (props) => (
    <header className="simpal">
        <div className="iq-header">
            <div className="container white-bg" style={{ 'max-width': '1200px', 'border-radius': '5px 5px 0 0' }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="logo">
                            <a href="/"><img className="img-fluid" src={props.logo} alt="" /></a>
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
)