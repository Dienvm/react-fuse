import { ROUTES } from 'app/constants'
import React from 'react'
import { authRoles } from '../../auth'

/**
 * Lazy load Dashboard
 */

const DashboardConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin, // ['admin']
  routes: [
    {
      path: ROUTES.dashboard,
      component: React.lazy(() => import('./Dashboard')),
    },
  ],
}

export default DashboardConfig
