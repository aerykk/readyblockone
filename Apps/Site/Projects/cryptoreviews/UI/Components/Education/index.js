const React = require('react')

export default (props) => (
    <section id="education" className="overview-block-ptb iq-page-shop" style={{ "background-image": "url('images/bg/bg.png');", "background-position": "center center;" }}>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="heading-title">
                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#education">Education Centre</a></h3>
                        {props.content}
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 second-carousel">
                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="2" data-sm-items="2" data-lg-items="2" data-md-items="2" data-autoplay="false">
                        {props.books.map((item) => (
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
)