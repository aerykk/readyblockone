const React = require('react')

export default (props) => (
    <div id="intro" className="container">
        <div className="banner-text">
            <div className="row flex-row-reverse">
                <div className="col-lg-5 col-md-12">
                    <div className="banner-form">
                        <div className="form-icon background-gradient-3">
                            <img className="img-fluid" src="/Apps/Site/Projects/cryptoreviews/Assets/Other/images/icon.png" alt="#" />
                        </div>
                        <h2 className="iq-tw-6">{props.data.name} <small>Stats</small></h2>
                        <p></p>
                        <ul className="listing-hand iq-mt-15 iq-tw-5">
                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Released:</strong> {props.data.highlight.stats.released}</li>
                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Ledger:</strong> {props.data.highlight.stats.ledger}</li>
                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Architecture:</strong> {props.data.highlight.stats.architecture}</li>
                            <li className="iq-mt-20" style={{ width: '100%' }}><strong>Type:</strong> {props.data.highlight.stats.type}</li>
                        </ul>
                        <br />
                        <a hidden href="#media" className="button dark iq-mt-10">Media Centre</a>
                        <a hidden href="#education" className="button dark iq-mt-10">Education Centre</a>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12 align-self-center">
                    <h1 className="iq-font-white iq-tw-6 iq-mb-10">What is <span className="iq-font-yellow">{props.data.name}?</span></h1>

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
)