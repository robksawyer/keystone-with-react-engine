import React, { Component } from 'react';
import FlashMessage from './FlashMessage';

// // TODO: Add the following
// 	if messages
// 		#flash-messages.container
// 			each message in messages.info
// 				+flash-message(message, 'info')
// 			each message in messages.success
// 				+flash-message(message, 'success')
// 			each message in messages.warning
// 				+flash-message(message, 'warning')
// 			each message in messages.error
// 				+flash-message(message, 'danger')

class FlashMessages extends Component {
	render(){
		if(!this.props.messages) {
			return null;
		}
		const messages = this.props.messages.map((message) =>
			<FlashMessage message={message} />
		);
		if(messages) {
			return (
				// Flash messages allow you to display once-off status messages to users, e.g. form
				// validation errors, success messages, etc.
				<div className="flash-messages container">{messages}</div>
			);
		}
	}
};

module.exports = FlashMessages;
