import {authRoles} from '../auth'

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		auth : authRoles.admin, //['admin']
		children: [
			{
				id: 'dashboards',
				title: 'Dashboards',
				translate: 'DASHBOARDS',
				type: 'collapse',
				icon: 'dashboard',
				children: [
					{
						id: 'analytics-dashboard',
						title: 'Analytics',
						type: 'item',
						url: '/dashboards'
					},
					{
						id: 'project-dashboard',
						title: 'Project',
						type: 'item',
						url: '/dashboards'
					}
				]
			},
		]
	}
];

export default navigationConfig;
