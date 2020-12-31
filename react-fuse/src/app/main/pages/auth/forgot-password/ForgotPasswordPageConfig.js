import React from 'react';

const ForgotPassword2PageConfig = {
	settings: {
		layout: {
			config: {},
		},
	},
	routes: [
		{
			path: '/forgot-password',
			component: React.lazy(() => import('./ForgotPasswordPage')),
		},
	],
};

export default ForgotPassword2PageConfig;
