import React from 'react'
import { Redirect } from 'react-router-dom'
import FuseUtils from '@fuse/utils'

import DashboardConfig from 'app/main/dashboard/DashboardConfig'
import pagesConfig from 'app/main/pages/pagesConfig'
import LoginConfig from 'app/main/login/LoginConfig'
import RegisterConfig from 'app/main/register/RegisterConfig'
import LogoutConfig from 'app/main/logout/LogoutConfig'
import { ROUTES } from 'app/constants'

const routeConfigs = [
  ...pagesConfig,
  DashboardConfig,
  LoginConfig,
  RegisterConfig,
  LogoutConfig,
]

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: ROUTES.main,
    exact: true,
    component: () => <Redirect to={ROUTES.dashboard} />,
  },
  {
    component: () => <Redirect to={ROUTES.error404} />,
  },
]

export default routes
