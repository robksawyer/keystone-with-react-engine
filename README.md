# keystone-with-react-engine
KeystoneJS CMS with React Engine as rendering engine, so we can render backend .jsx templates

# Getting Started

First you'll need a few tools. These include [brew](https://brew.sh) and  [yarn](https://code.facebook.com/posts/1840075619545360/yarn-a-new-package-manager-for-javascript/). Install these and then come back and run the following commands in your favorite shell/terminal.

```
$ brew install git
$ git clone https://github.com/robksawyer/keystone-with-react-engine
$ cd keystone-with-react-engine
$ brew install yarn
$ yarn
$ npm start
$ npm run watch
```

# KeystoneJS
I've used the 'yo keystone' command, to create a default KeystoneJS project, rewrote it to JSX templates and added React Engine as the view engine.

# React
Webpack creates a bundle that can mount from the backend rendered html, including props. (thanks to React Engine boot)

# Result
Now you can write server side pages with server side data in JSX templating (bye bye Jade or Handlebars) and simultaneously write the user interaction in those files. onClick will work after mounting the front end.

# Possible extensions
 - React Engine supports React Router, if you like to not define your routes in express.
 - We can add hot loading at the express routes.

# What I am not aiming at
This setup renders one page and allows interactions. It does not render a full SPA. If you will navigate to a next page in JS, you will not have your data prepared. I am not aiming at fixing that. This setup aims to give a better DX in creating a paged CMS-driven website.

# Known bugs
 - The canAccessKeystone virtual doesn't work from props. Probably since the props is a JSON copy from the model. I've directly requested it in the middleware now to make it available.


# Resources
- [paypal/react-engine](https://github.com/paypal/react-engine)
- [Isomorphic React Apps with React-Engine](https://www.paypal-engineering.com/2015/04/27/isomorphic-react-apps-with-react-engine/)
- [Khan/aphrodite](https://github.com/Khan/aphrodite): Inline Styles that work
- [Must.js](https://github.com/moll/js-must) - Must.js is a testing and assertion library for JavaScript and Node.js with a friendly BDD syntax (awesome.must.be.true()).
