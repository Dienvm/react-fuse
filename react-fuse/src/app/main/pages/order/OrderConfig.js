import React from 'react';
import { authRoles } from 'app/auth';

const OrdersConfig = {
	settings: {
		layout: {
			config: {},
		},
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/orders:orderId',
			component: React.lazy(() => import('./Order')),
		},
	],
};

export default OrdersConfig;