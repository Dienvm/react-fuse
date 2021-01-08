import React from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';

import UserHeader from './components/UserHeader';
import UserTable from './components/UserTable';

function UsersPage(props) {
	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
			}}
			header={<UserHeader />}
			content={<UserTable />}
			innerScroll
		/>
	);
}

export default UsersPage;
