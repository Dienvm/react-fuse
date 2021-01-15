import React from 'react'
import {authRoles} from 'app/auth'

const OrdersConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/orders',
      component: React.lazy(() => import('./Orders')),
    },
  ],
}

export default OrdersConfig
