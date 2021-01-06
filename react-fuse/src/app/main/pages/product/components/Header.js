import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FuseAnimate from '@fuse/core/FuseAnimate';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import * as ProductActions from 'app/store/actions';

import _ from 'lodash'

const Header = ({ form, productData, productId }) => {
	const dispatch = useDispatch();

	const canBeSubmitted = () => {
		return form && form.name.length > 0 && _.isEqual(productData.data, form);
	};

	const handleSaveProduct = () => {
		if (productId === 'new') {
			dispatch(ProductActions.saveProduct(form));
		} else {
			dispatch(ProductActions.updateProduct(productId, form));
		}
	};

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex flex-col items-start max-w-full">
				<FuseAnimate animation="transition.slideRightIn" delay={300}>
					<Typography
						className="normal-case flex items-center sm:mb-12"
						component={Link}
						role="button"
						to="/products"
						color="inherit"
					>
						<Icon className="text-20">arrow_back</Icon>
						<span className="mx-4">Products</span>
					</Typography>
				</FuseAnimate>

				<div className="flex items-center max-w-full">
					<FuseAnimate animation="transition.expandIn" delay={300}>
						{form.images && form.images.length > 0 && form.featuredImageId ? (
							<img
								className="w-32 sm:w-48 rounded"
								src={form.images.find((image) => image.id === form.featuredImageId).url}
								alt={form.name}
							/>
						) : (
							<img
								className="w-32 sm:w-48 rounded"
								src="assets/images/ecommerce/product-image-placeholder.png"
								alt={form.name}
							/>
						)}
					</FuseAnimate>
					<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography className="text-16 sm:text-20 truncate">
								{form && form.name ? form.name : 'New Product'}
							</Typography>
						</FuseAnimate>
						<FuseAnimate animation="transition.slideLeftIn" delay={300}>
							<Typography variant="caption">Product Detail</Typography>
						</FuseAnimate>
					</div>
				</div>
			</div>
			<FuseAnimate animation="transition.slideRightIn" delay={300}>
				<Button
					className="whitespace-no-wrap normal-case"
					variant="contained"
					color="secondary"
					disabled={!canBeSubmitted()}
					onClick={handleSaveProduct}
				>
					Save
				</Button>
			</FuseAnimate>
		</div>
	);
};

export default Header;
