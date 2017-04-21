import React from 'react';

function LoginButton(props) {
	return (
		<ul className="nav navbar-nav navbar-right">
			{ props.user && props.user.canAccessKeystone &&
				<li>
					<a href='/keystone'>
						Open Keystone
					</a>
				</li>
			}
			{ props.user &&
				<li>
					<a href='/keystone/signout'>
						Sign Out
					</a>
				</li>
			}
			{ !props.user &&
				<li>
					<a href='/keystone/signin'>
						Sign In
					</a>
				</li>
			}
		</ul>
	);
};

module.exports = LoginButton;
