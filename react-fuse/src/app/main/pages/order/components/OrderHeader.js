import FuseAnimate from '@fuse/core/FuseAnimate';
import { Icon, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderHeader = ({ order }) => {
	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex flex-1 flex-col items-center sm:items-start">
				<FuseAnimate animation="transition.slideRightIn" delay={300}>
					<Typography
						className="normal-case flex items-center sm:mb-12"
						component={Link}
						role="button"
						to="/apps/e-commerce/orders"
						color="inherit"
					>
						<Icon className="text-20">arrow_back</Icon>
						<span className="mx-4">Orders</span>
					</Typography>
				</FuseAnimate>

				<div className="flex flex-col min-w-0 items-center sm:items-start">
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography className="text-16 sm:text-20 truncate">{`Order ${order.orderId}`}</Typography>
					</FuseAnimate>

					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography variant="caption">
							{`From ${order.customer.firstName} ${order.customer.lastName}`}
						</Typography>
					</FuseAnimate>
				</div>
			</div>
		</div>
	);
};

export default OrderHeader;
