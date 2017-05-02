const Framework = require('../../../../../../../Framework')
const {React, ReactDOM, PropTypes, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework

import Layout from '../../Layouts/Default'

class Screen extends Component {
    render() {
        return (
            <Layout>
                <View style={styles.container}>
                    <View style={styles.eventChooser}>
                        <View style={Object.assign({}, styles.box, {'background-image': 'url(/App/Game/Assets/Other/Events/shoreline.jpg)'})} onClick={() => this.selectEvent(1)}>May 31st - Shoreline Cleanup</View>
                        <View style={styles.box} onClick={() => this.selectEvent(2)}>June 5th - Children Run</View>
                        <View style={styles.box} onClick={() => this.selectEvent(3)}>Sept 10th - Paws for a Cause Walk</View>
                        <View style={styles.box} onClick={() => this.selectEvent(4)}>December TBD - Food bank & Christmas Baurea</View>
                    </View>
                    <View style={styles.eventDetails}>
                        {details}
                    </View>
                </View>
            </Layout>
        )
    }
}


var styles = {
    container: {
        'margin': '0 auto'
    },
    eventChooser: {
        'padding-top': '50px',
        'width': '2000px',
        'clear': 'both',
        'overflow-x': 'scroll',
        'background-color': '#eee'
    },
    eventDetails: {
        'background': '#eee',
        'border-radius': '5px',
        'padding': '100px'
    },
    box: {
        'float': 'left',
        'font-family': '"Press Start 2P"',
        'font-size': '17px',
        'text-align': 'center',
        'color': '#fff',
        'width': '250px',
        'height': '180px',
        'margin': '30px',
        'padding': '18px 15px',
        'color': '#000',
        'background': '#eee url(/Apps/Site/Projects/Lorien/Assets/Images/Events/default.png) no-repeat 0 50%',
        'background-size': 'contain',
        'border-radius': '5px'
    },
}

export default Screen
