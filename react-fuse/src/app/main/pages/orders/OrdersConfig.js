import React from 'react';
import { authRoles } from 'app/auth';

/**
 * Lazy load Orders
 */

const OrdersConfig = {
	settings: {
		layout: {
			config: {},
		},
	},
	auth: authRoles.admin, // ['admin']
	routes: [
		{
			path: '/orders',
			component: React.lazy(() => import('./Orders')),
		},
	],
};

export default OrdersConfig;
