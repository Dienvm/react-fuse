import { ROUTES } from 'app/constants'
import React from 'react'

const ResetPasswordPageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: ROUTES.resestPassword,
      component: React.lazy(() => import('./ResetPasswordPage')),
    },
  ],
}

export default ResetPasswordPageConfig
