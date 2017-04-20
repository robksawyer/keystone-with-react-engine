import React from 'react';

class NavItem extends React.Component {
	render(){
		console.log(link);
		console.log(this);
		return (
			<li key={link.key} className={this.props.section == link.key ? 'active' : null}>
				<a href={link.href}>
					{link.label}
				</a>
			</li>
		);
	}
};

module.exports = NavItem;
