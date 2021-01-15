import React from 'react'
import { authRoles } from 'app/auth'
import { ROUTES } from 'app/constants'

const OrdersConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: ROUTES.orders,
      component: React.lazy(() => import('./Orders')),
    },
  ],
}

export default OrdersConfig
