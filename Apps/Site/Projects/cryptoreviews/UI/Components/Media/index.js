const React = require('react')

export default (props) => (
    <section id="media" className="overview-block-ptb iq-page-shop" style={{ "background-image": "url('images/bg/bg.png');", "background-position": "center center;" }}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="heading-title">
                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#media">Media Centre</a></h3>
                        {props.content}
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="col-12 second-carousel">
                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                        {props.items.map((item) => (
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
)