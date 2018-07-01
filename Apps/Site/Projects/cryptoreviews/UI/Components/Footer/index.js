const React = require('react')

export default (props) => (
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
)