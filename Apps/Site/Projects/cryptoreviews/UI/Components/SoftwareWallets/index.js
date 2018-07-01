const React = require('react')

export default (props) => (
    <section id="wallets" className="iq-clients overview-block-ptb iq-page-shop">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="heading-title">
                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#wallets">Software Wallets</a></h3>
                        {props.content}
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="col-12 second-carousel">
                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                        {props.items.map((item) => (
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
)