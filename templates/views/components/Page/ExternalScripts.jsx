import React, { Component } from 'react';

class ExternalScripts extends Component {
	render(){
		return (
			<div className='externalScripts'>
				{
					//- jQuery 1.11.3 is included by default, and required by both Bootstrap
					//- and the KeystoneJS Content Editor. If you are not targeting IE8,
					//- you can upgrade to 2.1.4 (also bundled) for better performance.
				}
				<script src="/js/jquery/jquery-1.11.3.min.js"></script>
				{
					//- Customise which Bootstrap javascript files are served by including
					//- them specifically here, instead of bootstrap-3.3.5.min.js
				}
				<script src="/js/bootstrap/bootstrap-3.3.5.min.js"></script>
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
