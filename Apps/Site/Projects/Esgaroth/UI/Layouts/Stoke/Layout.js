const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

class Layout extends Component {
    static propTypes = {
        breadcrumb: T.element,
        games: T.object.isRequired,
        site: T.object.isRequired
    }

    static defaultProps = {
        breadcrumb: null,
        games: [],
        site: {}
    }

    constructor() {
        super()

        this.state = {
            showGames: false
        }
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            document.body.style = 'background: #605F65 url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/linen-lighter.png);';
            document.getElementById('ui').style = 'background: transparent url(/Apps/Site/Projects/Esgaroth/Assets/Other/images/logo-bg.png) no-repeat -200px 0; background-size: auto 550px;';
        }

        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Layout.css').toString() : require('./Layout.css'), 'stokelayout-', (styles) => {
            this.setState({
                styles: styles
            })
        })
    }

    render() {
        const { children, breadcrumb, games, site } = this.props

        //if (!this.state.styles) { return <View></View> }

        return Framework.wrapStyles(this.state.styles,
            <View>
                <View className="container">
                    {this.state.styles && (
                        <View styles="c-header">
                            <View styles="c-header__left">
                                <h1 styles="c-header__logo">
                                  <Link to={"/"} styles="c-header__title">
                                      {site.title}
                                  </Link>
                                </h1>
                            </View>
                            <View styles="c-header__right">
                                <ul styles="c-nav">
                                    <li styles="c-nav__item">
                                        <Link to={"/about"} styles="c-nav__link">OUR STORY</Link>
                                        <Link to={"/careers"} styles="c-nav__link">CAREERS</Link>
                                        <Link to={"/games"} styles="c-nav__link">GAMES</Link>
                                        <Link to={"/news"} styles="c-nav__link">NEWS</Link>
                                    </li>
                                </ul>
                            </View>
                        </View>
                    )}

                    {typeof breadcrumb === 'string' && <View dangerouslySetInnerHTML={{__html: breadcrumb}} />}
                    {typeof breadcrumb === 'object' && breadcrumb}
                    {!breadcrumb && (
                        <ul className="breadcrumb">
                            <li className="active">
                                <Link to={"/"}><i className="icon-home"></i> {site.title}</Link>
                            </li>
                        </ul>
                    )}

                    <nav id="secondary" className="main-nav black-box tex">
                        <View className="nav-menu box">
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
                                            <Link to={"/game/" + item.code}>{item.title}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </View>
                    </nav>

                    <section id="main">
                        <View className="container-fluid">
                            <View className="row-fluid">
                                <View className="span12">
                                    {children}
                                </View>
                            </View>
                        </View>
                        <View className="row-fluid">
                            <View className="span12">
                                <View className="footer">
                                    <View>Copyright {site.copyright.date} &copy; <Link to={"/"}>{site.copyright.company}</Link>. All rights reserved.</View>
                                </View>
                            </View>
                        </View>
                    </section>
                </View>
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
