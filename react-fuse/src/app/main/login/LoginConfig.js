import React from 'react'
import { authRoles } from 'app/auth'
import { ROUTES } from 'app/constants'

const LoginConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: ROUTES.login,
      component: React.lazy(() => import('./Login')),
    },
  ],
}

export default LoginConfig
