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
            '"People buy into the leader before they buy into the vision." - John Maxwell',
            '"An eye for an eye would make the whole world blind" - Gandhi',
            '"What I did tell you is dont talk about it, be about it" - Eric Thomas',
            '"The last excuse I made was yesterday" - Eric Thomas',
            '"Thoughts are things, so why not choose great ones?" - Napoleon Hill',
            '"If you FAIL, never give up because FAIL means "First Attempt In Learning"',
            '"What I want for myself, I want for others" - Wallace D Wattles',
            '"We invented the word luck to express the known effects of unknown causes" - Voltaire',
            '"Poor People Spend First Then Invest What’s Left, Rich People Invest First Then Spend What’s Left“ - Jim Rohn',
            '"Money doesnt talk, but it sure as hell can hear. and if you call, it’ll come." - Ray Stanford',
            '"The law of attraction is a secondary law. The law of vibration is the primary law." - Bob Proctor',
            '"Our thoughts control our feeelings. and our feelings control our actions." - Napoleon Hill',
            '"Innovation is rewarded. Execution is worshipped." – Eric Thomas',
            '"We are what we repeatedly do. Excellence then, is not an act, but a habit." - Aristotle',
            '"The two most important days in your life are the day you are born... and the day you find out why." - Mark Twain',
            '"Those who can see the invisible, can do the impossible"',
            '"To do unreasonable things, you need to be unreasonable"',
            '"Everybody thats had a shower has had a great idea, its the ones that dry off that make a difference"',
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
                            <a href="http://ericmuyser.com" title="Go home" target="_blank">
                                <span className="icon">&nbsp;</span>
                                <span className="title">Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://github.com/ericmuyser/" title="Go to GitHub" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://stackoverflow.com/users/119301/eric-muyser/" title="Go to Stack Overflow" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">Stack Overflow</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://superuser.com/users/20454/eric-muyser/" title="Go to Super User" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">Super User</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://serverfault.com/users/11696/eric-muyser" title="Go to Server Fault" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">Server Fault</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://snipplr.com/users/ericmuyser" title="Go to Snipplr" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">Snipplr</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://gist.github.com/ericmuyser" title="Go to Gist" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">Gist</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.html5gamedevs.com/profile/20039-eric-muyser/" title="Go to HTML5 Gamedevs" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">HTML5 Gamedevs</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://cboard.cprogramming.com/member.php?u=12405" title="Go to CBoard" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">CBoard</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.gamedev.net/community/forums/viewprofile.asp?mode=cp&amp;ID=146656" title="Go to GameDev" target="_blank">
                                <span className="icon green">&nbsp;</span>
                                <span className="title">GameDev</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.facebook.com/ericmuyser" title="Go to Facebook" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/ericmuyser/" title="Go to Twitter" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Twitter</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.youtube.com/user/EricMuyser" title="Go to YouTube" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">YouTube</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.meetup.com/Rich-Vancouver/members/37119622/" title="Go to Meetup" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Meetup</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://whatpulse.org/stats/users/327634/" title="Go to WhatPulse" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">WhatPulse</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://digg.com/users/ericmuyser" title="Go to Digg" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Digg</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://myworld.ebay.ca/eric.muyser" title="Go to eBay" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">eBay</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.flickr.com/people/ericmuyser/" title="Go to Flickr" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Flickr</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://ca.linkedin.com/in/ericmuyser/" title="Go to LinkedIn" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.stumbleupon.com/stumbler/ericmuyser/" title="Go to Stumble Upon" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Stumble Upon</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.imdb.com/user/ur10107022/boards/profile" title="Go to IMDB" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">IMDB</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.vimeo.com/user2849981/" title="Go to Vimeo" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Vimeo</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.last.fm/user/ericmuyser/" title="Go to Last FM" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Last FM</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://bit.ly/user/recent/ericmuyser" title="Go to Bitly" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Bitly</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://delicious.com/ericmuyser" title="Go to Delicious" target="_blank">
                                <span className="icon blue">&nbsp;</span>
                                <span className="title">Delicious</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://steamcommunity.com/id/daemn/" title="Go to Steam" target="_blank">
                                <span className="icon red">&nbsp;</span>
                                <span className="title">Steam</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://raptr.com/daemn" title="Go to Raptr" target="_blank">
                                <span className="icon red">&nbsp;</span>
                                <span className="title">Raptr</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.desura.com/members/ericmuyser" title="Go to Desura" target="_blank">
                                <span className="icon red">&nbsp;</span>
                                <span className="title">Desura</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://live.xbox.com/en-US/profile/profile.aspx?GamerTag=EricMuyser" title="Go to Xbox Live" target="_blank">
                                <span className="icon red">&nbsp;</span>
                                <span className="title">Xbox Live</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.xfire.com/profile/daemn/" title="Go to Xfire" target="_blank">
                                <span className="icon red">&nbsp;</span>
                                <span className="title">Xfire</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.vworker.com/RentACoder/DotNet/SoftwareCoders/ShowBioInfo.aspx?lngAuthorId=6750277&amp;intTabSelectedId=2" title="Go to vWorker" target="_blank">
                                <span className="icon orange">&nbsp;</span>
                                <span className="title">vWorker</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.freelancer.com/users/531446.html" title="Go to Freelancer" target="_blank">
                                <span className="icon orange">&nbsp;</span>
                                <span className="title">Freelancer</span>
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
                            <li className="menu-item">
                                <a href="/contact/">Contact</a>
                            </li>
                            <li className="menu-item">
                                <a href="/interests/">Interests</a>
                            </li>
                            <li id="menu-item-713" className="menu-item dropdown">
                                <a href="/work/" data-target="#dropdown-menu-572adb37bd73f" className="dropdown-toggle" data-toggle="dropdown">
                                    Work <b className="caret"></b>
                                </a>
                                <ul id="dropdown-menu-572adb37bd73f" className="dropdown-menu">
                                    <li className="menu-item">
                                        <a href="/work/nodejs/">Node.js</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/php/">PHP</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/ruby-rails/">Ruby / Rails</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/python/">Python</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/jquery/">jQuery</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/flash/">Flash</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/cpp/">C++</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/titanium/">Titanium</a>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/work/lemonstand/">LemonStand</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <a href="/resume/">Resume</a>
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

                <div id="commenting-system">
                    <div id="disqus_thread">
                        <iframe id="dsq-app11" name="dsq-app11" allowtransparency="true" frameborder="0" scrolling="no" tabindex="0" title="Disqus" width="100%" src="http://disqus.com/embed/comments/?base=default&amp;version=3451144d0aa529e7c0f3cdd223d47134&amp;f=ericmuyser&amp;t_u=http%3A%2F%2Fericmuyser.com%2Fpage%2F2%2F&amp;t_d=Eric%20Muyser%20-%20Eric%20Muyser&amp;t_t=Eric%20Muyser%20-%20Eric%20Muyser&amp;s_o=default" style={{"width": "1px", "min-width": "100%", "border": "none", "overflow": "hidden", "height": "321px"}} horizontalscrolling="no" verticalscrolling="no"></iframe>
                    </div>
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
