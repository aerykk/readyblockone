import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';

import LaunchScreen from './UI/Screens/LaunchScreen';

module.exports = (
    <Router history={browserHistory}>
        <Route path="*" component={LaunchScreen} />
    </Router>
);
