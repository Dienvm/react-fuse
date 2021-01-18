import React from 'react'
import { Redirect } from 'react-router-dom'
import FuseUtils from '@fuse/utils'

import DashboardConfig from 'app/main/dashboard/DashboardConfig'
import pagesConfigs from 'app/main/pages/pagesConfigs'
import LoginConfig from 'app/main/login/LoginConfig'
import RegisterConfig from 'app/main/register/RegisterConfig'
import LogoutConfig from 'app/main/logout/LogoutConfig'
import { ROUTES } from 'app/constants'

console.log('pagesConfigs', pagesConfigs)

const routeConfigs = [
  ...pagesConfigs,
  DashboardConfig,
  LoginConfig,
  RegisterConfig,
  LogoutConfig,
]

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    exact: true,
    component: () => <Redirect to={ROUTES.dashboard} />,
  },
  {
    component: () => <Redirect to={ROUTES.error404} />,
  },
]

export default routes
