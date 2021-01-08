import FuseScrollbars from '@fuse/core/FuseScrollbars';
import _ from '@lodash';
import { Checkbox, Icon, Table, TableBody, TableCell, TablePagination, TableRow } from '@material-ui/core';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as UserActions from 'app/store/actions';
import UserTableHead from './UserTableHead';

const ProductsTable = (props) => {
	const dispatch = useDispatch();
	const users = useSelector(({ user }) => user);
	console.log('users', users);
	const searchText = useSelector(({ user }) => user.searchText);

	const [selected, setSelected] = useState([]);
	const [data, setData] = useState(users.data);
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState({
		direction: 'asc',
		id: null,
	});

	useEffect(() => {
		dispatch(UserActions.getUsers());
	}, [dispatch]);

	useEffect(() => {
		if (searchText.length !== 0) {
			setData(data.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase())));
			setPage(0);
		} else {
			setData(data);
		}
	}, [data, searchText]);

	useEffect(() => {
		if (users.type === UserActions.REMOVE_USERS) dispatch(UserActions.getUsers());
	}, [users, dispatch]);

	const handleRequestSort = (event, property) => {
		const id = property;
		let direction = 'desc';

		if (order.id === property && order.direction === 'desc') {
			direction = 'asc';
		}

		setOrder({
			direction,
			id,
		});
	};

	const handleSelectAllClick = (event) => {
		if (event.target.checked) {
			setSelected(data.map((n) => n.id));
			return;
		}
		setSelected([]);
	};

	const handleClick = (item) => {
		props.history.push(`/user/${item.id}/${item.handle}`);
	};

	const handleCheck = (event, id) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const handleChangePage = (event, value) => {
		setPage(value);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(event.target.value);
	};

	const handleRemoveProducts = () => {
		dispatch(UserActions.removeUsers(selected));
	};

	return (
		<div className="w-full flex flex-col">
			<FuseScrollbars className="flex-grow overflow-x-auto">
				<Table className="min-w-xl" aria-labelledby="tableTitle">
					<UserTableHead
						numSelected={selected.length}
						order={order}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={Object.keys(data).length}
						handleRemoveProducts={handleRemoveProducts}
					/>

					<TableBody>
						{_.orderBy(
							Object.keys(data),
							[
								(o) => {
									switch (order.id) {
										case 'name': {
											return o.name[0];
										}
										default: {
											return o[order.id];
										}
									}
								},
							],
							[order.direction]
						)
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((n) => {
								const isSelected = selected.indexOf(n.id) !== -1;
								return (
									<TableRow
										className="h-64 cursor-pointer"
										hover
										role="checkbox"
										aria-checked={isSelected}
										tabIndex={-1}
										key={n.id}
										selected={isSelected}
										onClick={(event) => handleClick(n)}
									>
										{/* <TableCell className="w-64 text-center" padding="none">
											<Checkbox
												checked={isSelected}
												onClick={(event) => event.stopPropagation()}
												onChange={(event) => handleCheck(event, n.id)}
											/>
										</TableCell>

										<TableCell className="w-52" component="th" scope="row" padding="none">
											{n.images.length > 0 && n.featuredImageId ? (
												<img
													className="w-full block rounded"
													src={n.images.find((image) => image.id === n.featuredImageId).url}
													alt={n.name}
												/>
											) : (
												<img
													className="w-full block rounded"
													src="assets/images/ecommerce/product-image-placeholder.png"
													alt={n.name}
												/>
											)}
										</TableCell>

										<TableCell component="th" scope="row">
											{n.name}
										</TableCell>

										<TableCell className="truncate" component="th" scope="row">
											{n.categories.join(', ')}
										</TableCell>

										<TableCell component="th" scope="row" align="right">
											<span>$</span>
											{n.priceTaxIncl}
										</TableCell>

										<TableCell component="th" scope="row" align="right">
											{n.quantity}
											<i
												className={clsx(
													'inline-block w-8 h-8 rounded mx-8',
													n.quantity <= 5 && 'bg-red',
													n.quantity > 5 && n.quantity <= 25 && 'bg-orange',
													n.quantity > 25 && 'bg-green'
												)}
											/>
										</TableCell>

										<TableCell component="th" scope="row" align="right">
											{n.active ? (
												<Icon className="text-green text-20">check_circle</Icon>
											) : (
												<Icon className="text-red text-20">remove_circle</Icon>
											)}
										</TableCell> */}
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</FuseScrollbars>

			<TablePagination
				className="overflow-hidden"
				component="div"
				count={Object.keys(data).length}
				rowsPerPage={rowsPerPage}
				page={page}
				backIconButtonProps={{
					'aria-label': 'Previous Page',
				}}
				nextIconButtonProps={{
					'aria-label': 'Next Page',
				}}
				onChangePage={handleChangePage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
};

export default withRouter(ProductsTable);
