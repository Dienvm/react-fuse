import { Avatar, Icon, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderContent = ({ order }) => {
	return (
		<div className="p-16 sm:p-24 max-w-2xl w-full">
			{/* Order Details */}
			<div>
				<div className="pb-48">
					<div className="pb-16 flex items-center">
						<Icon color="action">account_circle</Icon>
						<Typography className="h2 mx-16" color="textSecondary">
							Customer
						</Typography>
					</div>

					<div className="mb-24">
						<div className="table-responsive mb-16">
							<table className="simple">
								<thead>
									<tr>
										<th>Name</th>
										<th>Email</th>
										<th>Phone</th>
										<th>Company</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div className="flex items-center">
												<Avatar src={order.customer.avatar} />
												<Typography className="truncate mx-8">
													{`${order.customer.firstName} ${order.customer.lastName}`}
												</Typography>
											</div>
										</td>
										<td>
											<Typography className="truncate">{order.customer.email}</Typography>
										</td>
										<td>
											<Typography className="truncate">{order.customer.phone}</Typography>
										</td>
										<td>
											<span className="truncate">{order.customer.company}</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<Typography className="font-600">Shipping Address</Typography>
						<Typography className="w-full md:max-w-256 mb-16 md:mb-0">
							{order.customer.address.address}
						</Typography>
					</div>
				</div>

				<div className="pb-48">
					<div className="pb-16 flex items-center">
						<Icon color="action">access_time</Icon>
						<Typography className="h2 mx-16" color="textSecondary">
							Order Status
						</Typography>
					</div>

					<div className="table-responsive">
						<table className="simple">
							<thead>
								<tr>
									<th>Status</th>
									<th>Updated On</th>
								</tr>
							</thead>
							<tbody>
								{order.status.map((status) => (
									<tr key={status.id}>
										<td>
											<div className={`inline text-12 p-4 rounded truncate', ${n.status.color}`}>
												{order.status.name}
											</div>
										</td>
										<td>{status.date}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="pb-48">
					<div className="pb-16 flex items-center">
						<Icon color="action">attach_money</Icon>
						<Typography className="h2 mx-16" color="textSecondary">
							Payment
						</Typography>
					</div>

					<div className="table-responsive">
						<table className="simple">
							<thead>
								<tr>
									<th>TransactionID</th>
									<th>Payment Method</th>
									<th>Amount</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<span className="truncate">{order.payment.transactionId}</span>
									</td>
									<td>
										<span className="truncate">{order.payment.method}</span>
									</td>
									<td>
										<span className="truncate">{order.payment.amount}</span>
									</td>
									<td>
										<span className="truncate">{order.payment.date}</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div className="pb-48">
					<div className="pb-16 flex items-center">
						<Icon color="action">local_shipping</Icon>
						<Typography className="h2 mx-12" color="textSecondary">
							Shipping
						</Typography>
					</div>

					<div className="table-responsive">
						<table className="simple">
							<thead>
								<tr>
									<th>Tracking Code</th>
									<th>Carrier</th>
									<th>Weight</th>
									<th>Fee</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								{order.shippingDetails.map((shipping) => (
									<tr key={shipping.date}>
										<td>
											<span className="truncate">{shipping.tracking}</span>
										</td>
										<td>
											<span className="truncate">{shipping.carrier}</span>
										</td>
										<td>
											<span className="truncate">{shipping.weight}</span>
										</td>
										<td>
											<span className="truncate">{shipping.fee}</span>
										</td>
										<td>
											<span className="truncate">{shipping.date}</span>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* Products */}
			<div className="table-responsive">
				<table className="simple">
					<thead>
						<tr>
							<th>ID</th>
							<th>Image</th>
							<th>Name</th>
							<th>Price</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						{order.products.map((product) => (
							<tr key={product.id}>
								<td className="w-64">{product.id}</td>
								<td className="w-80">
									<img className="product-image" src={product.image} alt="product" />
								</td>
								<td>
									<Typography
										component={Link}
										to={`/product/${product.id}`}
										className="truncate"
										style={{
											color: 'inherit',
											textDecoration: 'underline',
										}}
									>
										{product.name}
									</Typography>
								</td>
								<td className="w-64 text-right">
									<span className="truncate">${product.price}</span>
								</td>
								<td className="w-64 text-right">
									<span className="truncate">{product.quantity}</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default OrderContent;
