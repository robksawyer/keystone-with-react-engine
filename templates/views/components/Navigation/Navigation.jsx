import React from 'react';
import LoginButton from '../Buttons/LoginButton';

function NavItem(props){
	return (
		<li className={props.section == props.link.key ? 'active' : null}>
			<a href={props.link.href}>
				{props.link.label}
			</a>
		</li>
	);
}

function Navigation(props) {
	return (
		<div id="header">
			<div className="container">
				{
					//- Customise your site's navigation by changing the navLinks Array in ./routes/middleware.js
					//- ... or completely change this header to suit your design.
				}
				<div role="navigation" className="navbar navbar-default">
					<div className="container-fluid">
						<div className="navbar-header">
							<button
								type="button"
								data-toggle="collapse"
								data-target=".navbar-collapse"
								className="navbar-toggle"
								>
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a href="/" className="navbar-brand">React-example</a>
						</div>

						<div className="collapse navbar-collapse">
							<ul className="nav navbar-nav navbar-left">
								{ props.navLinks.map((link) =>
									<NavItem key={link.key} link={link} section={props.section} />
								)}
							</ul>
							<LoginButton user={props.user} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

module.exports = Navigation;
