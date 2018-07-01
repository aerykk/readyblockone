const React = require('react')

export default (props) => (
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
                        {props.tokens.items.map((item) => (
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
)