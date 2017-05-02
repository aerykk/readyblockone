const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const config = require('./config')

module.exports = {
    title: 'Guide',
    serverHost: process.env.HOST || config.styleguideService.host,
    serverPort: process.env.PORT || config.styleguideService.port,
    assetsDir: path.join(__dirname, 'Apps'),
    components: function() {
        return glob.sync(path.resolve(__dirname, 'Apps/**/UI/**/*.js')).filter(function(module) {
            return /\/[A-Z]\w*\.js$/.test(module)
        })
    },
    updateWebpackConfig: function(config, env) {
        config.externals = {}
        config.externals['jsdom'] = 'window'
        config.externals['react/lib/ReactContext'] = 'window'
        config.externals['react/lib/ExecutionEnvironment'] = true
        config.externals['react/addons'] = true

        config.alias = {}
        config.alias.cheerio = 'cheerio/lib/cheerio'

        config.resolve.extensions = ['', '.js', '.jsx', '.json']

        // Babel loader will use your project’s .babelrc
        config.module.loaders.push({
            test: /\.jsx?$/,
            include: [path.join(__dirname + '/Apps'), path.join(__dirname + '/node_modules/react-native-extended-stylesheet')],
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0', 'react-hmre']
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin()
            ]
        })
        config.module.loaders.push({
            test: /\.json$/,
            include: path.join(__dirname + '/'), // Thanks cheerio :-/
            loader: 'json-loader'
        })
        config.module.loaders.push({
            test: /\.css$/,
            include: path.join(__dirname + '/Apps'),
            loaders: [
                'raw'
            ]
        })

        config.plugins.push(new webpack.IgnorePlugin(/^(react-native)$/))

        return config
    }
   // Put other configuration options here...
}
