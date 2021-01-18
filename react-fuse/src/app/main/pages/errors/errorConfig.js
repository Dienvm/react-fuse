import { ROUTES } from 'app/constants'
import React from 'react'

const ErrorConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: ROUTES.error404,
      component: React.lazy(() => import('./404/Error404Page')),
    },
    {
      path: ROUTES.error500,
      component: React.lazy(() => import('./500/Error500Page')),
    },
  ],
}

export default ErrorConfig
