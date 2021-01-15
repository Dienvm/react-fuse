import React from 'react'
import { authRoles } from 'app/auth'
import { ROUTES } from 'app/constants'

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
      path: ROUTES.user,
      component: React.lazy(() => import('./Users')),
    },
  ],
}

export default UsersConfig
