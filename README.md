# keystone-with-react-engine
KeystoneJS CMS with React Engine as rendering engine, so we can render backend .jsx templates

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
- [react-engine](https://github.com/paypal/react-engine)
- [Isomorphic React Apps with React-Engine](https://www.paypal-engineering.com/2015/04/27/isomorphic-react-apps-with-react-engine/)
- [Khan/aphrodite](https://github.com/Khan/aphrodite): Inline Styles that work
