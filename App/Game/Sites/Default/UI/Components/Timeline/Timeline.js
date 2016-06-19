const Framework = require('../../../../../../Framework');
const {React, PropTypes, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import { connect } from 'react-redux'

class Timeline extends Component {
    static propTypes = {
    }
    
    constructor() {
        super()
        
        this.state = {}
    }
    
    componentWillMount() {
        Framework.getStyles(Framework.Platform.Env.isServer ? require('fs').readFileSync(__dirname + '/Timeline.css').toString() : require('./Timeline.css'), 'stokelayout-', (styles) => {
            this.setState({
                styles: styles
            })
        })
    }

    render() {
        const { stages } = this.props

        if (!this.state.styles) { return <div></div>; }

        return Framework.wrapStyles(this.state.styles, 
            <ul styles="c-timeline">
                {stages.map((stage, i) => {
                    const {title, state, color} = stage
                    const mapStateToClassName = {
                        'incompleted': 'c--incompleted',
                        'completed': 'c--completed',
                        'inprogress': 'c--inprogress'
                    }
                    const className = mapStateToClassName[state]
                    return (
                        <li styles={"c-timeline__item c--" + color + " " + className}>
                            {i !== (stages.length-1) && <div styles={"c-timeline__arrow c--" + color + " " + className}></div>}
                            {stage.title}
                        </li>
                    )
                })}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default Timeline;
