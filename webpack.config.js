var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        'game.web': ['./App/Game/index.web.js'],
        'game.ios': ['./App/Game/index.ios.js'],
        'game.android': ['./App/Game/index.android.js'],
        'widget.web': ['./App/Widget/index.web.js']
    },
    output: {
        path: __dirname + '/Build/Release',
        publicPath: '/Build/Release/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.md']
    },
    externals: {
        'jsdom': 'window',
        'react/lib/ReactContext': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
    },
    alias: {
        'cheerio': 'cheerio/lib/cheerio'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                include: [path.join(__dirname + '/App'), path.join(__dirname + '/node_modules/react-native-extended-stylesheet')],
                query: {
                    cacheDirectory: true,
                    plugins: [],
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                include: path.join(__dirname + '/App'),
                loaders: [
                    'raw'
                ]
            },
            {
                test: /\.md$/,
                include: path.join(__dirname + '/App'),
                loaders: [
                    'raw'
                ]
            },
            {
                test: /\.json$/,
                include: path.join(__dirname + '/'), // Thanks cheerio :-/
                loader: 'json-loader'
            },
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/^(react-native)$/),
        new webpack.DefinePlugin({ 
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') } 
        })
    ]
};
