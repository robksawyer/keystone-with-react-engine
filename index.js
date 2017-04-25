// import the react-router routes
// var Routes = require('./routes.jsx');

// import the react-engine's client side booter
// See https://github.com/paypal/react-engine#usage-on-client-side-mounting
import ReactEngineClient from 'react-engine/lib/client';

// boot options
const options = {
  // routes: Routes,

  // supply a function that can be called
  // to resolve the file that was rendered.
  // This should launch App.js
  viewResolver: function(viewName) {
    return require('./client/views' + viewName);
  }
};

document.addEventListener('DOMContentLoaded', function onLoad() {
  // boot the app when the DOM is ready
  ReactEngineClient.boot(options);
});
