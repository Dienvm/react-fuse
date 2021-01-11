import React from 'react';

const ProfilePageConfig = {
	settings: {
		layout: {
			config: {},
		},
	},
	routes: [
		{
			path: '/profile/:userId',
			component: React.lazy(() => import('./ProfilePage')),
		},
	],
};

export default ProfilePageConfig;
