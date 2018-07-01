const React = require('react')

export default (props) => (
    <section id="alerts" className="iq-clients overview-block-ptb">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="heading-title">
                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#alerts">Notification Centre</a></h3>
                        {props.content}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div class="iq-cart_total heading-left">
                        <h4 class="iq-mb-30 title iq-tw-5">Alerts</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="20%">Date</th>
                                    <th width="20%">Type</th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.alerts.items.map((item) => (
                                    <tr class="iq-cart-st">
                                        <td>{item.date}</td>
                                        <td>{item.type}</td>
                                        <td>{item.content}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div class="iq-cart_total heading-left">
                        <br />
                        <h4 class="iq-mb-30 title iq-tw-5">Warnings &amp; Scams</h4>
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th width="20%">Date</th>
                                    <th width="20%">Type</th>
                                    <th>Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.alerts.items.map((item) => (
                                    <tr class="iq-cart-st">
                                        <td>{item.date}</td>
                                        <td>{item.type}</td>
                                        <td>{item.content}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
)