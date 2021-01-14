import FuseAnimate from '@fuse/core/FuseAnimate';
import { Icon, Input, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as orderActions from 'app/store/actions';

const OrdersHeader = () => {
	const dispatch = useDispatch();
	const searchText = useSelector(({ order }) => order.orders.searchText);

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32">add_shopping_cart</Icon>
				</FuseAnimate>

				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex mx-0 sm:mx-12" variant="h6">
						Orders
					</Typography>
				</FuseAnimate>
			</div>

			<div className="flex flex-1 items-center justify-center px-12">
				<FuseAnimate animation="transition.slideDownIn" delay={300}>
					<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>
						<Icon color="action">search</Icon>

						<Input
							placeholder="Search"
							className="flex flex-1 mx-8"
							disableUnderline
							fullWidth
							value={searchText}
							inputProps={{
								'aria-label': 'Search',
							}}
							onChange={(ev) => dispatch(orderActions.setOrdersSearchText(ev))}
						/>
					</Paper>
				</FuseAnimate>
			</div>
		</div>
	);
};

export default OrdersHeader;
