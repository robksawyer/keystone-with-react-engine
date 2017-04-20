import React from 'react';
import Welcome from '../Welcome/Welcome';
import Navigation from '../Navigation/Navigation';
import DynamicBody from './DynamicBody';
import Footer from './Footer';
import ExternalScripts from './ExternalScripts';

class Body extends React.Component {

	render(){
		return (
			<body>
				<Navigation navLinks={this.props.navLinks} user={this.props.user} />
				<div className="container">
					<div className="jumbotron">
						<Welcome user={this.props.user} section={this.props.section} />
					</div>
				</div>
				<DynamicBody intro={this.props.intro} children={this.props.children} messages={this.props.messages} />
				<Footer />
				<ExternalScripts js={this.props.js} user={this.props.user} />
			</body>
		);
	}
};

module.exports = Body;
