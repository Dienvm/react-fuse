import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from 'app/store/actions';
import reducer from 'app/store/reducers';

import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageCarded from '@fuse/core/FusePageCarded';
import Icon from '@material-ui/core/Icon';
import { useTheme } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';

import OrderHeader from './components/OrderHeader';
import OrderContent from './components/OrderContent';

function Order(props) {
	const dispatch = useDispatch();
	const order = useSelector(({ eCommerceApp }) => eCommerceApp.order);
	const theme = useTheme();

	const [tabValue, setTabValue] = useState(0);
	const [map, setMap] = useState('shipping');

	useEffect(() => {
		dispatch(Actions.getOrder(props.match.params));
	}, [dispatch, props.match.params]);

	function handleChangeTab(event, value) {
		setTabValue(value);
	}

	return (
		<FusePageCarded
			classes={{
				content: 'flex',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
			}}
			header={order && <OrderHeader order={order} />}
			content={order && <OrderContent />}
			innerScroll
		/>
	);
}

export default withReducer('eCommerceApp', reducer)(Order);
