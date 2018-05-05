const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, ReactNative, PropTypes, T, connect, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Animated, Dimensions, Router, Route, Link, createStore, browserHistory, compose, applyMiddleware, thunkMiddleware, Provider, syncHistoryWithStore, routerReducer, combineReducers, createLogger, renderToString} = Framework

class Layout extends Component {
    static propTypes = {
        breadcrumb: T.element,
        site: T.object.isRequired
    }

    static defaultProps = {
        breadcrumb: null,
        site: {}
    }

    constructor() {
        super()

        this.state = {
            slogan: this.getRandomSlogan()
        }
    }

    getRandomSlogan() {
        let slogans = [
            '"Be the change that you wish to see in the world" - Mahatma Gandhi',
            '"Success is the progressive realization of a worthy ideal" - Napoleon Hill',
            '"Whatever you are, be a good one." - Abraham Lincoln',
        ]

        return slogans[Math.floor(Math.random()*slogans.length)]
    }

    setRandomSlogan() {
        this.setState({slogan: this.getRandomSlogan()})

        setTimeout(() => this.setRandomSlogan(), 5000)
    }

    componentDidMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Layout.css').toString() : require('./Layout.css'), 'stokelayout-', (styles) => {
            this.setState({
                styles: styles
            })
        })

        this.setRandomSlogan()
    }

    render() {
        const { children, site } = this.props

        return Framework.wrapStyles(this.state.styles,
            <View>
                <nav id="navigation-social" className="box-2">
                    <ul className="style-2">
                        <li className="first">
                            <a href="javascript:;">&nbsp;</a>
                        </li>
                        <li>
                            <a href="/" title="Go home" target="_blank">
                                <span className="icon">&nbsp;</span>
                                <span className="title">Home</span>
                            </a>
                        </li>
                        <li className="last"><a href="javascript:;">&nbsp;</a></li>
                    </ul>
                </nav>

                <div className="subnav mobile">
                    <select>
                        <option>Home</option>
                        <option>About</option>
                    </select>
                </div>

                <div className="subnav web">
                    <nav className="menu-main-header-container">
                        <ul id="menu-main-header" className="nav nav-pills">
                            <li className="menu-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="/about/">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div id="content" className="pane">
                    <ul className="content-list">
                        <li>
                            <section id="home" className="active">
                                <div className="content-header">
                                    <h1>{site.title}</h1>
                                    <h2>{this.state.slogan}</h2>
                                </div>
                                <div className="content-body-wrapper box-1">
                                    <div className="content-body">
                                        {this.props.children}
                                    </div>
                                </div>
                            </section>
                        </li>
                    </ul>
                </div>

                <div id="loading" className="top progress progress-info progress-striped active" style={{"right": "-350px", "display": "block"}}>
                    <div className="bar" style={{"width": "100%"}}></div>
                </div>
            </View>
        );
    }
}

function mapStateToProps(state) {
    const { site } = state

    return {
        site
    }
}

export default connect(mapStateToProps)(Layout)
