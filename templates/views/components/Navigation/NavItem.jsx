import React from 'react';

class NavItem extends React.Component {

	render(props){
		return (
			<li key={link.key} className={props.section == link.key ? 'active' : null}>
				<a href={link.href}>
					{link.label}
				</a>
			</li>
		);
	}
};

module.exports = NavItem;
