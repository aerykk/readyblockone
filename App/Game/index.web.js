import React from 'react';
import ReactDOM from 'react-dom';

import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from './routes'

require('../Vendor/react-universal');

import UI from './UI/UI';

ReactDOM.render(<UI />, document.getElementById('ui'));
