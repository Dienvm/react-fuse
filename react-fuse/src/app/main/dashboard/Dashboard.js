import FusePageSimple from '@fuse/core/FusePageSimple';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import DashboardComponent from './components';

const useStyles = makeStyles(theme => ({
	layoutRoot: {}
}));

function DashboardPage(props) {
	const classes = useStyles(props);
	const { t } = useTranslation('dashboardPage');

	return (
		<FusePageSimple
			classes={{
				root: classes.layoutRoot
			}}
			header={
				<div className="p-24">
					<h4>{t('TITLE')}</h4>
				</div>
			}
			contentToolbar={
				<div className="px-24">
					<h4>Content Toolbar</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Content</h4>
					<br />
					<DashboardComponent />
				</div>
			}
		/>
	);
}

export default DashboardPage;
