import { ROUTES } from 'app/constants'
import React from 'react'

const AuthConfig = {
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
      component: React.lazy(() =>
        import('./forgot-password/ForgotPasswordPage')
      ),
    },
    {
      path: ROUTES.forgotPassword,
      component: React.lazy(() => import('./reset-password/ResetPasswordPage')),
    },
  ],
}

export default AuthConfig
