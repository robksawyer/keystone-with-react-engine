const webpack = require('webpack');
const path = require('path');
const context = path.resolve(__dirname, 'client/views');

const production = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  context,
  
  stats: {
    assets: false,
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },

  entry: {
    app: [
      'eventsource-polyfill', // necessary for hot reloading with IE
      'webpack-hot-middleware/client',
      './client/views/App.jsx'
    ],
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'es6-promise',
      'history',
      'core-js',
      'lodash',
      'eventsource-polyfill'
    ]
  },

  output: {
    path: path.resolve("./public/js"),
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    //new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: "bundle",
      filename: "bundle.js",
    })
    //new webpack.DefinePlugin({
    //  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    //})
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "less-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['react', 'es2015', 'stage-3'],
        },
      }
    ]
  },

  resolve: {
    alias: {
      'react': path.resolve('./node_modules/react'), //force sub node_modules of node_module to use the primary version of react (eg react-context)
    },
    extensions: [".js", ".jsx", ".json", ".css"],
  	// These extensions are tried when resolving a file
  }

};
