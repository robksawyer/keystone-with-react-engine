import React from 'react';

class Default extends React.Component {
	render() {
		console.log(this.props);
		return (
			<html>
				{this.props.children}
			</html>
		);
	};
};

export default Default;
