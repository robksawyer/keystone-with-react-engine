import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return (
			<div className="container">
				<div id="footer">
					<p>Powered by <a href="http://keystonejs.com" target="_blank">KeystoneJS</a>.</p>
				</div>
			</div>
		);
	}
};

module.exports = Footer;
