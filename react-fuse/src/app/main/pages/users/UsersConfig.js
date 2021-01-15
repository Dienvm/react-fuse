import React from 'react'
import { authRoles } from 'app/auth'

/**
 * Lazy load Users
 */

const UsersConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.admin,
  routes: [
    {
      path: '/users',
      component: React.lazy(() => import('./Users')),
    },
  ],
}

export default UsersConfig
