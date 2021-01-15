import { ROUTES } from 'app/constants'
import React from 'react'

const ProfilePageConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: ROUTES.profile,
      component: React.lazy(() => import('./ProfilePage')),
    },
  ],
}

export default ProfilePageConfig
