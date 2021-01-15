import React from 'react'
import { authRoles } from 'app/auth'
import { ROUTES } from 'app/constants'

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
      path: ROUTES.products,
      component: React.lazy(() => import('./Products')),
    },
  ],
}

export default ProductsConfig
