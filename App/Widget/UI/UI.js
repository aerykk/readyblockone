const Framework = require('../../Framework');
const {React, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

class UI extends Component {
    constructor() {
        super();

        this.state = {
            showGames: false
        };
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
        });

        if (this.state.showGames) {

        }
    }

    render() {
        if (!this.state.styles) { return <View></View> }

        return Framework.wrapStyles(this.state.styles, 
            <View style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '60px'}}>
                <View style={{position: 'relative'}}>
                    <View styles="c-nav-bg" />
                    <View styles="c-nav">
                        <ul styles="c-nav-left">
                            <li styles="c-nav-left-item">
                                <img styles="c-logo" src="https://stokegames.com/App/Game/Assets/Other/images/logo.png" />
                            </li>
                            <li styles="c-games">
                                <button styles="c-button" onClick={()=>this.onToggleGames()}>Games</button>
                                <ul styles={this.state.showGames ? 'c-games-menu-shown' :'c-games-menu-hidden'}>
                                    <li><a styles="c-link" href="https://stokegames.com/games/browser" target="_blank">Browser Games</a></li>
                                    <li><a styles="c-link" href="https://stokegames.com/games/downloadable" target="_blank">Downloadable Games</a></li>
                                    <li><a styles="c-link" href="https://stokegames.com/games/mobile" target="_blank">Mobile Games</a></li>
                                    <li><a styles="c-link" href="https://stokegames.com/games" target="_blank">All Games</a></li>
                                </ul>
                            </li>
                            <li styles="c-nav-left-item">
                                <a styles="c-link" href="https://stokegames.com/community" target="_blank">Community</a>
                            </li>
                            <li styles="c-nav-left-item">
                                <a styles="c-link" href="https://stokegames.com/support" target="_blank">Support</a>
                            </li>
                        </ul>
                        <ul styles="c-nav-right">
                            <li styles="c-nav-right-item">
                                <a styles="c-sign-up-button" href="https://stokegames.com/signup/" target="_blank">Free Sign Up</a>
                            </li>
                            <li styles="c-nav-right-item">
                                <a styles="c-login-button" href="https://stokegames.com/login/" target="_blank">Login</a>
                            </li>
                        </ul>
                    </View>
                </View>
            </View>
        );
    }
}

export default UI;
