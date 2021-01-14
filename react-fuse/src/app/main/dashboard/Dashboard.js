import FusePageCarded from '@fuse/core/FusePageCarded';
import React from 'react';
import DashboardComponent from './components';

function DashboardPage(props) {
	return (
		<FusePageCarded
			header={
				<div className="p-24">
					<h4>TITLE</h4>
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
