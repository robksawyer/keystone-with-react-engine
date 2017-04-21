const webpack = require('webpack');
const path = require('path');

const production = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {

  stats: {
    assets: false,
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },

  context: path.resolve(__dirname, '.'),

  devtool: production ? null : 'source-map',

  entry: {
    index: path.resolve(__dirname, 'index.js'),
    // 'style-loader': path.resolve(__dirname, 'public/styles'),
    // 'css-loader': path.resolve(__dirname, 'public/styles/site.css'),
    // 'less-loader': path.resolve(__dirname, 'public/styles/site.css'),
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: "style-loader" // creates style nodes from JS strings
      //     }, {
      //       loader: "css-loader", // translates CSS into CommonJS
      //       options: {
      //         sourceMap: true
      //       }
      //     }, {
      //       loader: "less-loader", // compiles Less to CSS
      //       options: {
      //         sourceMap: true
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['react', 'es2015', 'stage-2'],
            },
          }
        ],
    }]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
