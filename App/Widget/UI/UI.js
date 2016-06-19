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
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/UI.css').toString() : require('./UI.css'), 'stokelayout-', (styles) => {
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
        return Framework.wrapStyles(this.state.styles, 
            <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '60px'}}>
                <div style={{position: 'relative'}}>
                    <div styles="c-nav-bg" />
                    <div styles="c-nav">
                        <ul styles="c-nav-left">
                            <li styles="c-nav-left-item"><img styles="c-logo" src="https://stokegames.com/App/Game/Assets/Other/images/logo.png" /></li>
                            <li styles="c-games">
                                <div styles="c-link" onClick={()=>this.onToggleGames()}>Games</div>
                                <ul styles={this.state.showGames ? 'c-games-menu-shown' :'c-games-menu-hidden'}>
                                    <li><a styles="c-link" href="https://stokegames.com/games/browser">Browser Games</a></li>
                                    <li><a styles="c-link" href="https://stokegames.com/games/downloadable">Downloadable Games</a></li>
                                    <li><a styles="c-link" href="https://stokegames.com/games/mobile">Mobile Games</a></li>
                                    <li><a styles="c-link" href="https://stokegames.com/games">All Games</a></li>
                                </ul>
                            </li>
                            <li styles="c-nav-left-item">
                                <a styles="c-link" href="https://stokegames.com/community">Community</a>
                            </li>
                            <li styles="c-nav-left-item">
                                <a styles="c-link" href="https://stokegames.com/support">Support</a>
                            </li>
                        </ul>
                        <ul styles="c-nav-right">
                            <li styles="c-nav-right-item">
                                <a styles="c-sign-up-button" href="https://stokegames.com/signup/">Free Sign Up</a>
                            </li>
                            <li styles="c-nav-right-item">
                                <a styles="c-login-button" href="https://stokegames.com/login/">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UI;
