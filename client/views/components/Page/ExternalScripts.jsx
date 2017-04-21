import React, { Component } from 'react';

class ExternalScripts extends Component {
	render(){
		return (
			<div className='externalScripts'>
				{ this.props.user && this.props.user.canAccessKeystone &&
					//- The KeystoneJS Content Editor provides support for ks-editable data attributes,
					//- which generate links to edit content for users who can access Keystone
					<script src="/keystone/js/content/editor.js"></script>
				}
				<script src="/js/bundle.js"></script>
				{
					//- Add scripts that are globally required by your site here.

					//- Include template-specific javascript files by extending the js block
					this.props.js
				}
			</div>
		);
	}
};

module.exports = ExternalScripts;
