const Framework = require('../../../../../../Framework');
const {React, ReactDOM, PropTypes, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import { Link } from 'react-router';

class Layout extends Component {
    static propTypes = {
        test: PropTypes.number
    };

    static defaultProps = {
        test: 5
    };

    constructor() {
        super();

        this.state = {};
    }
    componentDidMount() {
        document.body.style = 'background: #605F65 url(/App/Game/Assets/Other/images/linen-lighter.png);';
        document.getElementById('ui').style = 'background: transparent url(/App/Game/Assets/Other/images/logo-bg.png) no-repeat -200px 0; background-size: auto 550px;';
    }
    render() {
        return (
            <View style={styles.container}>
                <div className="container">
                    <div className="top-nav">
                        <div className="container-fluid">
                            <div className="row-fluid search-button-bar-container">
                                <div className="span12">
                                    <h1 className="pull-left logo">
                                      <Link to={"/"}>
                                          Stoke Games
                                      </Link>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    {this.props.breadcrumb ? <div dangerouslySetInnerHTML={{__html: this.props.breadcrumb}} /> : (
                        <ul className="breadcrumb">
                            <li className="active">
                                <Link to={"/"}><i className="icon-home"></i> Stoke Games</Link>
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
                                    <Link to={"/games"}>
                                        <i className="icon-book"></i> Games
                                    </Link>
                                </li>
                                <li className="nav-header">Games</li>
                            </ul>
                        </div>
                    </nav>

                    <section id="main">
                        <div className="container-fluid">
                            <div className="row-fluid">
                                <div className="span12">
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="span12">
                                <div className="footer">
                                    <div>Copyright 2013-{new Date().getFullYear()} &copy; <Link to={"/"}>Stoke Games</Link>. All rights reserved.</div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </View>
        );
    }
}

var styles = {
};

export default Layout;
