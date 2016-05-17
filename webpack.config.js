var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'app': ['./App/Game/index.web.js'],
    'index.ios': ['./App/Game/index.ios.js']
  },
  output: {
    path: __dirname + '/Package/Release',
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
        include: path.join(__dirname, 'App'),
        //exclude: 'node_modules',
        query: {
          cacheDirectory: true,
          plugins: [],
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'App'),
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
    ]
  },
  plugins: []
};
