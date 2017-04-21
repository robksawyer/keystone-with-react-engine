import React from 'react';
import Default from './containers/Default';

// React Engine needs exports, don't export default
class App extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<Default {...this.props}/>
		);
	};
};

module.exports = App;
