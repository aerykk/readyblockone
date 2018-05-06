const Framework = require('../../../Framework')
const {React, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

class UI extends Component {
    constructor() {
        super()

        this.state = {
            showGames: false
        }
    }

    componentDidMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/UI.css').toString() : require('./UI.css'), 'stokewidget-', (styles) => {
            this.setState({
                styles: styles
            })
        })
    }

    onToggleGames() {
        this.setState({
            showGames: !this.state.showGames
        })

        if (this.state.showGames) {

        }
    }

    render() {
        if (!this.state.styles) { return <View></View> }

        let host = null

        if (window.location.hostname.indexOf('.local') === -1) {
            host = 'https://readyblock.one'
        } else {
            host = 'http://readyblock.one.local:11010'
        }

        return (
            <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '60px'}}>
                <View style={{position: 'relative'}}>
                    <View styles="c-nav-bg" />
                    <View styles="c-nav">
                        <ul styles="c-nav-left">
                            <li styles="c-nav-left-item">
                                <img styles="c-logo" src={host + "/Apps/Site/Projects/Esgaroth/Assets/Other/images/logo.png"} />
                            </li>
                            <li styles="c-games">
                                <button styles="c-button" onClick={()=>this.onToggleGames()}>Games</button>
                                <ul styles={this.state.showGames ? 'c-games-menu-shown' :'c-games-menu-hidden'}>
                                    <li><a styles="c-link" href={host + "/games/browser"} target="_blank">Browser Games</a></li>
                                    <li><a styles="c-link" href={host + "/games/downloadable"} target="_blank">Downloadable Games</a></li>
                                    <li><a styles="c-link" href={host + "/games/mobile"} target="_blank">Mobile Games</a></li>
                                    <li><a styles="c-link" href={host + "/games"} target="_blank">All Games</a></li>
                                </ul>
                            </li>
                            <li styles="c-nav-left-item">
                                <a styles="c-link" href={host + "/community"} target="_blank">Community</a>
                            </li>
                            <li styles="c-nav-left-item">
                                <a styles="c-link" href={host + "/support"} target="_blank">Support</a>
                            </li>
                        </ul>
                        <ul styles="c-nav-right">
                            <li styles="c-nav-right-item">
                                <a styles="c-sign-up-button" href={host + "/signup"} target="_blank">Free Sign Up</a>
                            </li>
                            <li styles="c-nav-right-item">
                                <a styles="c-login-button" href={host + "/login"} target="_blank">Login</a>
                            </li>
                        </ul>
                    </View>
                </View>
            </View>
        )
    }
}

export default UI
