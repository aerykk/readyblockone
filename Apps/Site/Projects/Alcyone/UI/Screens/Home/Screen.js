const Framework = require('../../../../../../../Framework')
const {React, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView, Dimensions} = Framework


if (Platform.Env.isNative) {
}

class Screen extends Component {
    toString() { '[HomeScreen]' }

    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Screen.css').toString() : require('./Screen.css'), 'alcyone-', (styles) => { this.setState({styles: styles})})

    }

    render() {
        let host = null

        if (Platform.Env.isProduction) {
            host = 'https://stokegames.com'
        } else {
            host = 'http://localhost:8080'
        }

        // If it's native, it has a web view going to launch
        // If it's web, it goes to launch without doing anything
        return Framework.wrapStyles(this.state.styles,
            <View styles="container">
                {Platform.Env.isNative && (
                    <WebView
                        ref="webviewbridge"
                        styles="web-view"
                        url={host + "/index.html"}
                    />
                )}
            </View>
        )
    }
}

export default Screen
