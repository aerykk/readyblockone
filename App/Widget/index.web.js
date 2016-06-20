const Framework = require('../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import UI from './UI';

function bindEvent(element, type, handler) {
    if (element.addEventListener) {
        element.addEventListener(type, handler, false);
    } else {
        element.attachEvent('on' + type, handler);
    }
}

function onReady() {
    let target = window.document.createElement('div');
    target.id = 'stoke-widget';
    window.document.body.appendChild(target);

    ReactDOM.render((
        <View>
            <AppWrapper config={AppConfig}>
                <UI />
            </AppWrapper>
        </View>
    ), target);
}

onReady();
// if (window.document.readyState === 'complete') {
//     onReady();
// } else {
//     bindEvent(window.document, 'DOMContentLoaded', onReady);
// }
