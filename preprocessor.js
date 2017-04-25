// start by configuring Babel at the top
// this takes care of parsing JSX files and also ES6 code
require('babel-register')({
  presets: ['flow','es2015', 'react', 'stage-3']
});

require('./keystone');
