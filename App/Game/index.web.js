import React from 'react';
import ReactDOM from 'react-dom';

import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import routes from './routes'

require('../Vendor/react-universal');

import UI from './UI/UI';

if (typeof document !== 'undefined') {
    ReactDOM.render(<UI />, document.getElementById('ui'));
} else {
    module.exports = function(req) {
      // Note that req.url here should be the full URL path from
      // the original request, including the query string.
      match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          res.status(200).send(renderToString(<RoutingContext {...renderProps} />))
        } else {
          res.status(404).send('Not found')
        }
        });
    };
}
