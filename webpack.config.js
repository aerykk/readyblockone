import { ReactLoadablePlugin } from 'react-loadable/webpack'

const path = require('path')
const webpack = require('webpack')
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')


var config = {
    cache: false,
    stats: {
        warnings: false
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    entry: {
        'site.web': ['./Apps/Site/index.web.js']
    },
    output: {
        path: __dirname + '/Build/Release',
        publicPath: '/Build/Release/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    externals: {
        'jsdom': 'window',
        'react/lib/ReactContext': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true,
        'jquery': true,
        'TweenLite': true
    },
    resolve: {
        alias: {
            'cheerio': 'cheerio/lib/cheerio'
        }
    },
    module: {
        unsafeCache: false,
        rules: [
            {
                test: /\.js(x?)$/,
                include: [
                    path.join(__dirname + '/Framework'),
                    path.join(__dirname + '/Apps'),
                    path.join(__dirname + '/Services')
                ],
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react', 'stage-0'],
                    plugins: [
                        'transform-do-expressions',
                        'transform-function-bind',
                        'transform-class-constructor-call',
                        'transform-export-extensions',
                        'syntax-trailing-function-commas',
                        'transform-exponentiation-operator',
                        'syntax-dynamic-import',
                        [
                            'import-inspector',
                            {
                                'serverSideRequirePath': true
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                include: path.join(__dirname + '/Apps'),
                loader: 'raw-loader',
            },
            {
                test: /\.json$/,
                include: [
                    path.join(__dirname + '/Framework'),
                    path.join(__dirname + '/Apps'),
                    path.join(__dirname + '/Services'),
                ],
                loader: 'json-loader',
            },
        ]
    },
    plugins: [
        new webpack.IgnorePlugin(/^(react-native)$/),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        }),
        new ReactLoadablePlugin({
            filename: './react-loadable.json',
        })
    ]
}

// if (process.env.NODE_ENV === 'production') {
//     config.plugins.push(
//         new StaticSiteGeneratorPlugin('site.web', [
//             '/',
//             '/about/'
//         ])
//     )
// }

module.exports = config
