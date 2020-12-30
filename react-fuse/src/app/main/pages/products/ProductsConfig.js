import React from 'react'
import { authRoles } from 'app/auth';


/**
 * Lazy load Products
 */

const ProductsConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    auth: authRoles.admin,
    routes: [
        {
            path: '/products',
            component: React.lazy(() => import('./Products'))
        }
    ]
};

export default ProductsConfig;
