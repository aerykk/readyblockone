const Framework = require('../Framework');
const {React, ReactDOM, AppWrapper, AppConfig, Platform, Component, AppRegistry, Navigator, StyleSheet, Text, View, TouchableHighlight, WebView} = Framework;

import { Router, Route, Link, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

var Router2 = require('./Router')(window.location.hostname);

const history = syncHistoryWithStore(browserHistory, Router2.store);

ReactDOM.render((
    <Provider store={Router2.store}>
        <div>
            <Router history={history} routes={Router2.routes} />
        </div>
    </Provider>
), document.getElementById('ui'));
