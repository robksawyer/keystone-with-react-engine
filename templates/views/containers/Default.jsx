import React from 'react';

class Default extends React.Component {
	render() {
		return (
			<html>
				{this.props.children}
			</html>
		);
	};
};

export default Default;
