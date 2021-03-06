import webpack from 'webpack';
import path from 'path';

const production = process.env.NODE_ENV === 'production' ? true : false;

'use strict';

const config = {

  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },

  context: path.resolve(__dirname, '.'),

  devtool: production ? null : 'source-map',

  entry: {
    index: path.resolve(__dirname, 'index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
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
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
