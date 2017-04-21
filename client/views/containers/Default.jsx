import React, { Component } from 'react';
import Header from '../components/Page/Header';
import Body from '../components/Page/Body';
import { StyleSheet, css } from 'aphrodite';

class Default extends Component {
	render() {
		return (
			<html>
				<Header css={this.props.css} head={this.props.head} user={this.props.user} title={(this.props.title) ? this.props.title : 'React-example'} />
				<Body children={this.props.children} section={this.props.section} navLinks={this.props.navLinks} user={this.props.user} messages={this.props.messages} js={this.props.js} />
			</html>
		);
	};
};

export default Default;
