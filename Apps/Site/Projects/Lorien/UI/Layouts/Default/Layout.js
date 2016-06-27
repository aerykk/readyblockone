const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, PropTypes, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import { Link } from 'react-router'
import { connect } from 'react-redux'

class Layout extends Component {
    static propTypes = {
        site: PropTypes.object.isRequired
    }

    static defaultProps = {
        breadcrumb: null,
        site: {}
    }

    constructor() {
        super()

        this.state = {
        }
    }

    componentDidMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Layout.css').toString() : require('./Layout.css'), 'stokelayout-', (styles) => {
            this.setState({
                styles: styles
            })
        })
    }

    render() {
        const { children } = this.props

        if (!this.state.styles) { return <div></div> }

        return Framework.wrapStyles(this.state.styles,
            <View>
                {children}
            </View>
        )
    }
}

function mapStateToProps(state) {
    const { site } = state

    return {
        site
    }
}

export default connect(mapStateToProps)(Layout)
