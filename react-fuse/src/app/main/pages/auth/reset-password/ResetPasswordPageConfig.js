import React from 'react';

const ResetPasswordPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/reset-password',
			component: React.lazy(() => import('./ResetPasswordPage'))
		}
	]
};

export default ResetPasswordPageConfig;
