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
      path: '/dashboard',
      component: React.lazy(() => import('./Dashboard')),
    },
  ],
}

export default DashboardConfig
