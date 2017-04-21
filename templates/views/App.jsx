import React from 'react';
import Default from './containers/Default';
import Header from './components/Page/Header';
import Body from './components/Page/Body';

// React Engine needs exports, don't export default
function App(props) {
	return (
		<Default>
			<Header css={props.css} head={props.head} user={props.user} title={(props.title) ? props.title : 'React-example'} />
			<Body children={props.children} section={props.section} navLinks={props.navLinks} user={props.user} messages={props.messages} js={props.js} />
		</Default>
	);
};

module.exports = App;
