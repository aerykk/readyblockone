const path = require('path')
const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
//const SiteRouter = require('./App/Game/Router')

var config = {
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
        extensions: ['', '.js', '.jsx', '.json']
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
                include: [
                    path.join(__dirname + '/App'),
                    path.join(__dirname + '/WebService'),
                    path.join(__dirname + '/DataService'),
                    path.join(__dirname + '/node_modules/react-native-extended-stylesheet')
                ],
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
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new StaticSiteGeneratorPlugin('game.web', [
            '/',
            '/about/'
        ])
        //SiteRouter('stokegames.com').routes)
    )
    // config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    //     sourceMap: false,
    //     minimize: true,
    //     compress: {
    //         drop_debugger: true,
    //         warnings: false,
    //         drop_console: true
    //     }
    // }))
}

module.exports = config
