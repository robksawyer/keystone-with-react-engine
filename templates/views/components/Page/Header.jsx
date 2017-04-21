import React from 'react';

function Header(props) {
	return (
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<title>{props.title || 'React-example'}</title>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<link href="/styles/site.css" rel="stylesheet" />
			{ props.user && props.user.canAccessKeystone &&
				<link href="/keystone/styles/content/editor.min.css" rel="stylesheet" />
			}
			{props.css}
			{props.head}
		</head>
	);
};

module.exports = Header;
