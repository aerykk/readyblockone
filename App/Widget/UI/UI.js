const Framework = require('../../Framework');
const {React, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

class UI extends Component {
    constructor() {
        super();

        this.state = {
            showGames: false,
            styles: Framework.getStyles(require('./UI.css'), 'stokewidget-')
        };
    }

    onToggleGames() {
        this.setState({
            showGames: !this.state.showGames
        });

        if (this.state.showGames) {

        }
    }

    render() {
        return Framework.wrapStyles(
            <div style={{marginBottom: 60, position: 'absolute', top: 0, left: 0}}>
                <div style={{position: 'relative'}}>
                    <div styles={this.state.styles.NavBg} />
                    <div styles={this.state.styles.Nav}>
                        <ul styles={this.state.styles.NavLeft}>
                            <li styles={this.state.styles.NavLeftItem}><img styles={this.state.styles.Logo} src="https://stokegames.com/App/Game/Assets/Other/images/logo.png" /></li>
                            <li styles={this.state.styles.Games}>
                                <div styles={this.state.styles.Link} onClick={()=>this.onToggleGames()}>Games</div>
                                <ul styles={this.state.showGames ? this.state.styles.GamesMenuShown : this.state.styles.GamesMenuHidden}>
                                    <li><a styles={this.state.styles.Link} href="https://stokegames.com/games/browser">Browser Games</a></li>
                                    <li><a styles={this.state.styles.Link} href="https://stokegames.com/games/downloadable">Downloadable Games</a></li>
                                    <li><a styles={this.state.styles.Link} href="https://stokegames.com/games/mobile">Mobile Games</a></li>
                                    <li><a styles={this.state.styles.Link} href="https://stokegames.com/games">All Games</a></li>
                                </ul>
                            </li>
                            <li styles={this.state.styles.NavLeftItem}>
                                <a styles={this.state.styles.Link} href="https://stokegames.com/community">Community</a>
                            </li>
                            <li styles={this.state.styles.NavLeftItem}>
                                <a styles={this.state.styles.Link} href="https://stokegames.com/support">Support</a>
                            </li>
                        </ul>
                        <ul styles={this.state.styles.NavRight}>
                            <li styles={this.state.styles.NavRightItem}>
                                <a styles={this.state.styles.SignUpButton} href="https://stokegames.com/signup/">Free Sign Up</a>
                            </li>
                            <li styles={this.state.styles.NavRightItem}>
                                <a styles={this.state.styles.LoginButton} href="https://stokegames.com/login/">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UI;
