const React = require('react')

export default (props) => (
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
)