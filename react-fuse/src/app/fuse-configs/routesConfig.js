import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';

import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import LogoutConfig from 'app/main/logout/LogoutConfig';

const routeConfigs = [...pagesConfigs, DashboardConfig, LoginConfig, RegisterConfig, LogoutConfig];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/dashboard" />,
	},
	{
		component: () => <Redirect to="/not-found" />,
	},
];

export default routes;
