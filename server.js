const express = require('express');
const webpack = require('webpack');
const http = require('http');
const exec = require('child_process').exec;
const url = require('url');
const fs = require('fs');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');

const isProduction = process.env.NODE_ENV === 'production';
const host = isProduction ? '0.0.0.0' : '0.0.0.0';
const port = process.env.PORT ? process.env.PORT : 11010;
var app = express();

var clients = [];
var clientHost = null;

if (isProduction) {
} else {
    require('look').start(11012, '0.0.0.0');

    config.devtool = 'eval'; // Speed up incremental builds
    config.entry['game.web'].unshift('webpack-hot-middleware/client?path=/__webpack_hmr');
    config.entry['widget.web'].unshift('webpack-hot-middleware/client?path=/__webpack_hmr');
    config.output.publicPath = '/Build/Release/';
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
    config.plugins.unshift(new webpack.NoErrorsPlugin());
    config.module.loaders[0].query.presets.push('react-hmre');

    const compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    }));

    app.use(webpackHotMiddleware(compiler, {
        hot: true,
        historyApiFallback: true
    }));
}

app.use(express.static(__dirname));

import { Router, RouterContext, match } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import React from 'react'
import { renderToString } from 'react-dom/server'

var indexHTML = '';

fs.readFile('main.html', function(err, html) {
    indexHTML = html.toString();
});

function renderFullPage(html, state) {
    indexHTML = html

    indexHTML.replace(
        `
            <title></title>
        `.trim(),
        `
            <title>${state.site.title}</title>
        `.trim()
    )
    
    indexHTML.replace(
        `
            <meta content="" name="description" />
        `.trim(),
        `
            <meta content="${state.site.description}" name="description" />
        `.trim()
    )
    
    let initialState = JSON.stringify(state);
    indexHTML.replace(
        `
            <div id="ui"></div>
        `.trim(),
        `
            <div id="ui">${html}</div>
            <script>window.$REDUX_STATE = ${initialState}</script>
        `.trim()
    )

    return indexHTML
}

function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) => {
  	return Object.keys(current).reduce((acc, key) => {
  		return current[key].hasOwnProperty('needs') ? current[key].needs.concat(acc) : acc
  	}, prev)
  }, []);

  const promises = needs.map(need => dispatch(need(params)));

  return Promise.all(promises);
}

// server rendering
app.use((req, res, next) => {
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.info('Requested: ' + fullUrl)
    var Router2 = require('./App/Game/Router')(req.get('host'));

    // react-router
    match({
        routes: Router2.routes,
        location: req.url
    }, (error, redirectLocation, renderProps) => {
        if (error) {
            return res.status(500).send(error.message);
        }

        if (redirectLocation) {
            return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if (renderProps === null) {
            // return next('err msg: route not found'); // yield control to next middleware to handle the request
            return res.status(404).send( 'Not found' );
        }

        // console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps, false, 1, true) )
        // console.log( '\nserver > renderProps: \n', require('util').inspect( renderProps.components, false, 3, true) )

        // this is where universal rendering happens,
        // fetchComponentData() will trigger actions listed in static "needs" props in each container component
        // and wait for all of them to complete before continuing rendering the page,
        // hence ensuring all data needed was fetched before proceeding
        //
        // renderProps: contains all necessary data, e.g: routes, router, history, components...
        fetchComponentData(
            Router2.store.dispatch,
            renderProps.components,
            renderProps.params
        )
        .then(() => {
            const initView = renderToString((
                <Provider store={Router2.store}>
                    <RouterContext {...renderProps} />
                </Provider>
            ))

            // console.log('\ninitView:\n', initView);

            // console.log( '\nstate: ', state )
            
            let initialState = JSON.stringify(state);
            let page = renderFullPage(initView, initialState)
            // console.log( '\npage:\n', page );

            return page;
        })
        .then(page => res.status(200).send(page))
        .catch(err => res.end(err.message));
    })
})

var server = http.createServer(app);
var io = require('socket.io').listen(server);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var setHost = function(client) {
    console.log('Setting host to player: ' + client.player.id);
    clientHost = client;
};

var findNewHost = function() {
    if (clients.length > 0) {
        var i = getRandomInt(0, clients.length-1);
        var client = clients[i];

        // Make sure client had time to initialize the player
        if (client) {
            setHost(client);

            console.log('New host: ' + clientHost.player.id);
            io.sockets.emit('setHost', {player: clientHost.player});
        }
    }
};

var getClientHost = function() {
    if (!clients.length) { return; }
    return clients.reduce(function(previousClient, currentClient) { if (previousClient && previousClient.player.id === clientHost.player.id) { return previousClient; } else if (currentClient.player.id === clientHost.player.id) { return currentClient; }});
};

var findClientBySocket = function(socket) {
    if (!clients.length) { return; }
    return clients.reduce(function(previousClient, currentClient) { if (previousClient && previousClient.socket === socket) { return previousClient; } else if (currentClient.socket === socket) { return currentClient; }});
};

var addClient = function(client) {
    console.log('Adding player: ' + client.player.id);
    clients.push(client);
};

var removeClient = function(client) {
    console.log('Removing player: ' + client.player.id);

    clients.splice(clients.indexOf(client), 1);
};

// Monitor the clients to make sure they are still defined
var monitorHost = function() {
    if (clientHost) {
        //console.log('Host: ', clientHost.player.id);
    } else {
        findNewHost();
    }

    setTimeout(monitorHost, 100);
};

setTimeout(monitorHost, 100);

var parseEvent = function(socket, event) {
    if (event.key === 'newPlayer') {
        console.log('Handshaking...');

        addClient({socket: socket, player: event.info.player});

        // If it's the first client or there's no hosts, lets set it as the new host
        if (!clientHost) {
            setHost(clients[clients.length-1]);
            console.log('New host: ' + clientHost.player.id);
        }

        socket.emit('setHost', {player: clientHost.player});
    } else {
        //socket.broadcast.emit(event.key, event.info);
    }
};

io.sockets.on('connection', function(socket) {
    console.log('New connection.. waiting for handshake');

    // TODO: give them 10 seconds to identify as a newPlayer, or cut them off

    socket.on('events', function(data) {
        //console.log('Incoming events: ' + data);
        data = JSON.parse(data);

        data.events.forEach(function(event) { parseEvent(socket, event); });

        socket.broadcast.emit('events', data);
    });

    socket.on('disconnect', function() {
        var client = findClientBySocket(socket);

        if (!client) { return; }

        removeClient(client);

        console.log('player left', client.player.id);

        // If this client was the host,
        // and there's at least one more client connected,
        // lets choose a new random host,
        // and broadcast it to everybody
        if (client.player.id === clientHost.player.id) {
            clientHost = null;
            findNewHost();
        }

        io.sockets.emit('removePlayer', {player: client.player});
    });
});

monitorHost();

server.listen(port, host, function onStart(err) {
    if (err) {
        console.log(err);
    }

    console.info('==> Listening on port %s in env ' + process.env.NODE_ENV + '. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
