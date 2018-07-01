const React = require('react')

export default (props) => (
    <section id="compare" className="overview-block-ptb iq-feature4 iq-additional iq-page-shop">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="heading-title iq-mb-0">
                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#compare">Compare</a></h3>
                        {props.content}
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 second-carousel">
                    <div class="owl-carousel popup-gallery" data-nav-dots="true" data-nav-arrow="true" data-items="3" data-sm-items="3" data-lg-items="3" data-md-items="3" data-autoplay="false">
                        {props.items.map((item) => (
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
)