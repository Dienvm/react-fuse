import { ROUTES } from 'app/constants'
import React from 'react'

const ForgotPassword2PageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: ROUTES.forgotPassword,
      component: React.lazy(() => import('./ForgotPasswordPage')),
    },
  ],
}

export default ForgotPassword2PageConfig
