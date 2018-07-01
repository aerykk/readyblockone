const React = require('react')

export default (props) => (
    <section id="exchanges" className="iq-clients overview-block-ptb">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="heading-title">
                        <h3 className="title iq-tw-5 iq-mb-20"><a href="#exchanges">Exchanges</a></h3>
                        {props.content}
                    </div>
                </div>
            </div>
            <div className="row">
                {props.spotlight.map((item) => (
                    <div className="col-sm-6">
                        <div className="iq-clients-blog iq-mtb-15">
                            <div className="media iq-pall-20" style={{ height: '220px' }}>
                                <a href={item.link}><img className="client-img" src={item.thumbnail} alt="" /></a>
                                <div className="media-body">
                                    <h4 className="mt-0 iq-tw-5">{item.title}</h4>
                                    {item.content}
                                </div>
                            </div>
                            <ul className="list-inline">
                                <li className="list-inline-item"><a href={item.link}>{item.domain}</a></li>
                                <li className="list-inline-item list-item-go"><a className="button iq-mt-25 float-right" href={item.link}>Go to {item.title}</a></li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="table-responsive">
                        <table className="table table-bordered iq-shopping-cart-table text-center">
                            <thead className="grey-bg">
                                <tr>
                                    <th>Rank</th>
                                    <th>Exchange</th>
                                    <th>Age</th>
                                    <th>Hacks</th>
                                    <th>Safety</th>
                                    <th>Notes</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.items.map((item) => (
                                    <tr>
                                        <td className="text-center">{item.rank}</td>
                                        <td>
                                            <a href={item.link}>
                                                <img src={item.thumbnail} alt="img" style={{ width: '50px' }} />
                                                {item.title}
                                            </a>
                                        </td>
                                        <td className="align-middle">{item.age}</td>
                                        <td className="align-middle">{item.hacks}</td>
                                        <td className="align-middle">
                                            {item.safety}
                                        </td>
                                        <td className="text-left">
                                            {item.notes}
                                        </td>
                                        <td>
                                            {item.link && (
                                                <a className="button iq-mt-25 background-gradient-3" href={item.link}>Go</a>
                                            )}
                                            {!item.link && (
                                                <p>Warning</p>
                                            )}
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