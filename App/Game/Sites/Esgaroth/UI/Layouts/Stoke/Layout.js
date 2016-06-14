const Framework = require('../../../../../../Framework')
const {React, ReactDOM, PropTypes, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import { Link } from 'react-router'
import { connect } from 'react-redux'

class Layout extends Component {
    static propTypes = {
        children: PropTypes.element,
        breadcrumb: PropTypes.element,
        games: PropTypes.object.isRequired,
        site: PropTypes.object.isRequired
    }

    static defaultProps = {
        children: null,
        breadcrumb: null,
        games: [],
        site: {}
    }

    constructor() {
        super()

        this.state = {}
    }

    componentDidMount() {
        document.body.style = 'background: #605F65 url(/App/Game/Assets/Other/images/linen-lighter.png);';
        document.getElementById('ui').style = 'background: transparent url(/App/Game/Assets/Other/images/logo-bg.png) no-repeat -200px 0; background-size: auto 550px;';
    }

    render() {
        const { children, breadcrumb, games, site } = this.props

        return (
            <View>
                <div className="container">
                    <div className="top-nav">
                        <div className="container-fluid">
                            <div className="row-fluid search-button-bar-container">
                                <div className="span12">
                                    <h1 className="pull-left logo">
                                      <Link to={"/"}>
                                          {site.title}
                                      </Link>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {typeof breadcrumb === 'string' && <div dangerouslySetInnerHTML={{__html: breadcrumb}} />}
                    {typeof breadcrumb === 'object' && breadcrumb}
                    {!breadcrumb && (
                        <ul className="breadcrumb">
                            <li className="active">
                                <Link to={"/"}><i className="icon-home"></i> {site.title}</Link>
                            </li>
                        </ul>
                    )}

                    <nav id="secondary" className="main-nav black-box tex">
                        <div className="nav-menu box">
                            <ul className="nav nav-list">
                                <li className="active">
                                    <Link to={"/"}>
                                        <i className="icon-home"></i> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/about"}>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/contact"}>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"/games"}>
                                        <i className="icon-book"></i> Games
                                        <span className="pull-right badge">{games.list.length}</span>
                                    </Link>
                                </li>
                                {games.list.map((item) => {
                                    return (
                                        <li key={item.code}>
                                            <Link to={"/games/" + item.code}>{item.title}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </nav>

                    <section id="main">
                        <div className="container-fluid">
                            <div className="row-fluid">
                                <div className="span12">
                                    {children}
                                </div>
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span12">
                                <div className="footer">
                                    <div>Copyright {site.copyright.date} &copy; <Link to={"/"}>{site.copyright.company}</Link>. All rights reserved.</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { games, site } = state

    return {
        games,
        site
    }
}

export default connect(mapStateToProps)(Layout)
