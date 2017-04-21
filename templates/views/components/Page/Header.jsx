import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		console.log(this.props)
		return (
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<title>{this.props.title || 'React-example'}</title>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link href="/styles/site.css" rel="stylesheet" />
				{ this.props.user && this.props.user.canAccessKeystone &&
					<link href="/keystone/styles/content/editor.min.css" rel="stylesheet" />
				}
				{this.props.css}
				{this.props.head}
			</head>
		);
	}
};

module.exports = Header;
