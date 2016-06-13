import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';


module.exports = (
    <Route path="*" component={require('./UI/Screens/Launch').default} />
);
