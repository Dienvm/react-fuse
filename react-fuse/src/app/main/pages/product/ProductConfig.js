import React from 'react';
import { authRoles } from 'app/auth';

/**
 * Lazy load Products
 */

const ProductsConfig = {
	settings: {
		layout: {
			config: {},
		},
	},
	auth: authRoles.admin,
	routes: [
		{
			path: '/product/:productId/:productHandle?',
			component: React.lazy(() => import('./Product')),
		},
	],
};

export default ProductsConfig;
