import React from 'react';
import Default from './containers/Default';
import Header from './components/Page/Header';
import Body from './components/Page/Body';

class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(props){
		console.log('Inside of App => render() ...');
		return (
			<Default>
				<Header css={ (this.props.css) ? this.props.css : '' } head={(this.props.head) ? this.props.head : ''} user={(this.props.user) ? this.props.user : ''} title={(this.props.title) ? this.props.title : 'React-example'} />
				<Body children={this.props.children} section={this.props.section} navLinks={this.props.navLinks} user={this.props.user} messages={this.props.messages} js={this.props.js} />
			</Default>
		);
	};
};

// React Engine needs exports, don't export default
module.exports = App;
