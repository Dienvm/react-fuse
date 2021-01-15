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
      path: ROUTES.order,
      component: React.lazy(() => import('./Order')),
    },
  ],
}

export default OrdersConfig
