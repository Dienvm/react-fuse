import React from 'react'
import { authRoles } from 'app/auth'
import { ROUTES } from 'app/constants'

const RegisterConfig = {
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
      path: ROUTES.register,
      component: React.lazy(() => import('./Register')),
    },
  ],
}

export default RegisterConfig
