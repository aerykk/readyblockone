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
const port = isProduction ? process.env.PORT : 8080;
var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var clients = [];
var clientHost = null;

if (isProduction) {
} else {
    config.devtool = 'eval'; // Speed up incremental builds
    config.entry['app'].unshift('webpack-hot-middleware/client?path=http://localhost:8080/__webpack_hmr');
    config.output.publicPath = 'http://localhost:8080/Package/Release/';
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

app.get('*', function(req, res, cb) {
    fs.exists('App/Game/Assets/Pages/' + req.url + '.md', function(exists) {
        if (exists) {
            fs.readFile('index.html', function(err, page) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(page);
                res.end();
            });
        } else {
            cb();
        }
    });
});

app.use(express.static(__dirname));


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
