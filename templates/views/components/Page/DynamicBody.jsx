import React from 'react';
import FlashMessages from '../Notifications/FlashMessages';

class DynamicBody extends React.Component {
	render(){
		return (
			<div id="body">
				{
					//- NOTE:
					//- There is no .container wrapping className around body blocks to allow more flexibility in design.
					//- Remember to include it in your templates when you override the intro and content blocks!
				}

				{
					//- The Intro block appears above flash messages (used for temporary information display)
					this.props.intro
				}
				{
					//- Flash messages allow you to display once-off status messages to users, e.g. form
					//- validation errors, success messages, etc.
					<FlashMessages messages={this.props.messages} />
				}
				{
					//- The children block should contain the body of your template's content
					this.props.children
				}
			</div>
		);
	}
};

module.exports = DynamicBody;
