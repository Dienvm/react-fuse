import { ROUTES } from 'app/constants'
import React from 'react'

const ForgotPassword2PageConfig = {
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
  routes: [
    {
      path: ROUTES.forgotPassword,
      component: React.lazy(() => import('./ForgotPasswordPage')),
    },
  ],
}

export default ForgotPassword2PageConfig
