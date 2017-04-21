import React from 'react';


// TODO: Add the following
// mixin flash-message(message, type)
// 	div(class='alert alert-' + type)
// 		if utils.isObject(message)
// 			if message.title
// 				h4= message.title
// 			if message.detail
// 				p= message.detail
// 			if message.list
// 				ul
// 					each item in message.list
// 						li= item
// 		else
// 			= message

class FlashMessage extends React.Component {
  render(){
    return (
      <div className='alert alert-{this.props.type}'></div>
    );
  };
};

module.exports = FlashMessage;
