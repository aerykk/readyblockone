const React = require('react')

export default (props) => (
    <section id="quick" className="overview-block-ptb iq-feature4 iq-additional">
        <div className="container">
            <div className="row">
                <div className="col-12 heading-title iq-mb-0">
                    <h3 className="title iq-tw-5 iq-mb-20"><a href="#quick">Quick Links</a></h3>
                </div>
                <div className="col-12 iq-cart_total heading-left">
                    <h4 class="iq-mb-30 title iq-tw-5">Social Networks</h4>
                    <br />
                    {props.social.content}
                    <br />
                    <div className="table-responsive">
                        <table className="table table-bordered iq-shopping-cart-table">
                            <thead>
                                <tr>
                                    <th width="20%">Name</th>
                                    <th>Rating</th>
                                    <th>Categories</th>
                                    <th width="50%">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.social.items.map((item) => (
                                    <tr>
                                        <td>
                                            <a href={item.link}>
                                                {item.name}
                                            </a>
                                        </td>
                                        <td>
                                            {item.rating}
                                        </td>
                                        <td className="align-middle">
                                            <ul class="iq-tags list-inline" style={{ width: '240px' }}>
                                                {item.tags && item.tags.map((tag) => (
                                                    <li><span>{tag}</span></li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            {item.notes}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-12 iq-cart_total">
                    <h4 class="iq-mb-30 title iq-tw-5">Discussion Forums</h4>
                    <div className="table-responsive">
                        <table className="table table-bordered iq-shopping-cart-table">
                            <thead>
                                <tr>
                                    <th width="20%">Name</th>
                                    <th>Rating</th>
                                    <th>Categories</th>
                                    <th width="50%">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.forums.items.map((item) => (
                                    <tr>
                                        <td>
                                            <a href={item.link}>
                                                {item.name}
                                            </a>
                                        </td>
                                        <td>
                                            {item.rating}
                                        </td>
                                        <td className="align-middle">
                                            <ul class="iq-tags list-inline" style={{ width: '240px' }}>
                                                {item.tags && item.tags.map((tag) => (
                                                    <li><span>{tag}</span></li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            {item.notes}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="col-12 iq-cart_total">
                    <h4 class="iq-mb-30 title iq-tw-5">Other</h4>
                    <div className="table-responsive">
                        <table className="table table-bordered iq-shopping-cart-table">
                            <thead>
                                <tr>
                                    <th width="20%">Name</th>
                                    <th>Rating</th>
                                    <th>Categories</th>
                                    <th width="50%">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.other.items.map((item) => (
                                    <tr>
                                        <td>
                                            <a href={item.link}>
                                                {item.name}
                                            </a>
                                        </td>
                                        <td>
                                            {item.rating}
                                        </td>
                                        <td className="align-middle">
                                            <ul class="iq-tags list-inline" style={{ width: '240px' }}>
                                                {item.tags && item.tags.map((tag) => (
                                                    <li><span>{tag}</span></li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            {item.notes}
                                        </td>
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