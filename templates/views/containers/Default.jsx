import React from 'react';

class Default extends React.Component {
	render(props) {
		console.log(this.props);
		return (
			<html>
				{this.props.children}
			</html>
		);
	};
};

module.exports = Default;
