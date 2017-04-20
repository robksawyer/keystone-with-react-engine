import React from 'react';

class LoginButton extends React.Component {

	render(props){
		return (
			<ul className="nav navbar-nav navbar-right">
				{ this.props.user && this.props.user.canAccessKeystone &&
					<li>
						<a href='/keystone'>
							Open Keystone
						</a>
					</li>
				}
				{ this.props.user &&
					<li>
						<a href='/keystone/signout'>
							Sign Out
						</a>
					</li>
				}
				{ !this.props.user &&
					<li>
						<a href='/keystone/signin'>
							Sign In
						</a>
					</li>
				}
			</ul>
		);
	}
};

module.exports = LoginButton;
