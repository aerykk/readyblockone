const React = require('react')

export default (props) => (
    <section id="faq" className="iq-faqs overview-block-ptb">
        <div className="container ">
            <div className="row">
                <div className="col-sm-12">
                    <div className="heading-title">
                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#faq">FAQ</a></h3>
                        {props.content}
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-12 col-md-12 ">
                    <div id="accordion" role="tablist">
                        {props.items.map((item) => (
                            <div class="card">
                                <div class="card-header" role="tab" id={"heading" + item.id}>
                                    <div>
                                        <a class={item.collapsed ? "collapsed" : ""} data-toggle="collapse" href={"#collapse" + item.id} aria-expanded="true" aria-controls={"collapse" + item.id}>
                                            {item.question}
                                        </a>
                                    </div>
                                </div>
                                <div id={"collapse" + item.id} class={item.collapsed ? "collapse" : "collapse show"} role="tabpanel" aria-labelledby={"heading" + item.id} data-parent="#accordion">
                                    <div class="card-body">
                                        {item.answer}
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