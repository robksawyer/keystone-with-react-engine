import React from 'react';
import Welcome from '../Welcome/Welcome';
import Navigation from '../Navigation/Navigation';
import DynamicBody from './DynamicBody';
import Footer from './Footer';
import ExternalScripts from './ExternalScripts';

function Body(props) {
	return (
		<body>
			<Navigation navLinks={props.navLinks} user={props.user} />
			<div className="container">
				<div className="jumbotron">
					<Welcome user={props.user} section={props.section} />
				</div>
			</div>
			<DynamicBody intro={props.intro} children={props.children} messages={props.messages} />
			<Footer />
			<ExternalScripts js={props.js} user={props.user} />
		</body>
	);
};

module.exports = Body;
