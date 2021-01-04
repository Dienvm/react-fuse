import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ProductActions from 'app/store/actions';
import reducer from 'app/store/reducers';

import FuseAnimate from '@fuse/core/FuseAnimate';
// import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import { orange } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';

import TableForm from './components/TableForm';

const useStyles = makeStyles((theme) => ({
	productImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: orange[400],
		opacity: 0,
	},
	productImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
	},
	productImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $productImageFeaturedStar': {
				opacity: 0.8,
			},
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $productImageFeaturedStar': {
				opacity: 1,
			},
			'&:hover $productImageFeaturedStar': {
				opacity: 1,
			},
		},
	},
}));

const Product = (props) => {
	const dispatch = useDispatch();
	const productData = useSelector(({ product }) => product.product);

	const classes = useStyles(props);
	const { form, handleChange, setForm } = useForm(null);

	useEffect(() => {
		// const updateProductState = () => {
		// 	const { productId } = props.match.params;

		// 	if (productId === 'new') {
		// 		dispatch(ProductActions.newProduct());
		// 	} else {
		// 		dispatch(ProductActions.getProduct(props.match.params));
		// 	}
		// };

		// updateProductState();
		dispatch(ProductActions.newProduct());
	}, [dispatch]);

	useEffect(() => {
		if ((productData.data && !form) || (productData.data && form && productData.data.id !== form.id)) {
			setForm(productData.data);
		}
	}, [form, productData.data, setForm]);

	const handleChipChange = (value, name) => {
		setForm(
			_.set(
				{ ...form },
				name,
				value.map((item) => item.value)
			)
		);
	};

	const setFeaturedImage = (id) => {
		setForm(_.set({ ...form }, 'featuredImageId', id));
	};

	const handleUploadChange = (e) => {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.readAsBinaryString(file);

		reader.onload = () => {
			setForm(
				_.set({ ...form }, `images`, [
					{
						id: FuseUtils.generateGUID(),
						url: `data:${file.type};base64,${btoa(reader.result)}`,
						type: 'image',
					},
					...form.images,
				])
			);
		};

		reader.onerror = () => {
			console.log('error on load image');
		};
	};

	const canBeSubmitted = () => {
		return form.name.length > 0 && !_.isEqual(productData.data, form);
	};

	// if (!productData.data || (productData.data && props.match.params.productId !== productData.data.id)) {
	// 	return <FuseLoading />;
	// }

	console.log('form', form);
	return (
		<FusePageCarded
			classes={{
				toolbar: 'p-0',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
			}}
			header={
				<div className="flex flex-1 w-full items-center justify-between">
					<div className="flex flex-col items-start max-w-full">
						<FuseAnimate animation="transition.slideRightIn" delay={300}>
							<Typography
								className="normal-case flex items-center sm:mb-12"
								component={Link}
								role="button"
								to="/apps/e-commerce/products"
								color="inherit"
							>
								<Icon className="text-20">arrow_back</Icon>
								<span className="mx-4">Products</span>
							</Typography>
						</FuseAnimate>

						<div className="flex items-center max-w-full">
							{/* <FuseAnimate animation="transition.expandIn" delay={300}>
								{form && form.images.length > 0 && form.featuredImageId ? (
									<img
										className="w-32 sm:w-48 rounded"
										src={_.find(form.images, { id: form.featuredImageId }).url}
										alt={form.name}
									/>
								) : (
									<img
										className="w-32 sm:w-48 rounded"
										src="assets/images/ecommerce/product-image-placeholder.png"
										alt={form.name}
									/>
								)}
							</FuseAnimate> */}
							<div className="flex flex-col min-w-0 mx-8 sm:mc-16">
								<FuseAnimate animation="transition.slideLeftIn" delay={300}>
									<Typography className="text-16 sm:text-20 truncate">
										{/* {form.name ? form.name : 'New Product'} */}
										New Product
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
							// disabled={!canBeSubmitted()}
							onClick={() => dispatch(ProductActions.saveProduct(form))}
						>
							Save
						</Button>
					</FuseAnimate>
				</div>
			}
			content={
				form && (
					<TableForm
						form={form}
						handleChange={handleChange}
						handleChipChange={handleChipChange}
						handleUploadChange={handleUploadChange}
						setFeaturedImage={setFeaturedImage}
						classes={classes}
					/>
				)
			}
			innerScroll
		/>
	);
};

// export default Product;
export default withReducer('ProductForm', reducer)(Product);
