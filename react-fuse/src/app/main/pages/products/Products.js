import React from 'react';
import FusePageCarded from '@fuse/core/FusePageCarded';
import ProductsHeader from './components/ProductsHeader';
import ProductsTable from './components/ProductsTable';

function ProductsPage(props) {

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
			}}
			header={<ProductsHeader />}
			content={<ProductsTable />}
			innerScroll
		/>
	);
}

export default ProductsPage;
