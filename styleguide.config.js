var path = require('path');
var glob = require('glob');
var webpack = require('webpack');

module.exports = {
    title: 'Guide',
    serverPort: process.env.PORT || 11011,
    serverHost: process.env.HOST || '0.0.0.0',
    assetsDir: path.join(__dirname, 'App'),
    components: function() {
        return glob.sync(path.resolve(__dirname, 'App/**/UI/**/*.js')).filter(function(module) {
            return /\/[A-Z]\w*\.js$/.test(module);
        });
    },
    updateWebpackConfig: function(config, env) {
        config.externals = {};
        config.externals['jsdom'] = 'window';
        config.externals['react/lib/ReactContext'] = 'window';
        config.externals['react/lib/ExecutionEnvironment'] = true;
        config.externals['react/addons'] = true;

        config.alias = {};
        config.alias.cheerio = 'cheerio/lib/cheerio';

        config.resolve.extensions = ['', '.js', '.jsx', '.json'];

        // Babel loader will use your project’s .babelrc
        config.module.loaders.push({
            test: /\.jsx?$/,
            include: [path.join(__dirname + '/App'), path.join(__dirname + '/node_modules/react-native-extended-stylesheet')],
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-0', 'react-hmre']
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new webpack.NoErrorsPlugin()
            ]
        });
        config.module.loaders.push({
            test: /\.json$/,
            include: path.join(__dirname + '/'), // Thanks cheerio :-/
            loader: 'json-loader'
        });
        config.module.loaders.push({
            test: /\.css$/,
            include: path.join(__dirname + '/App'),
            loaders: [
                'raw'
            ]
        });

        config.plugins.push(new webpack.IgnorePlugin(/^(react-native)$/));

        return config;
    }
   // Put other configuration options here...
};
