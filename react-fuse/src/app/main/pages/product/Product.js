import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as ProductActions from 'app/store/actions';
import reducer from 'app/store/reducers';

import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/utils';
import { orange } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import withReducer from 'app/store/withReducer';

import TableForm from './components/TableForm';
import Header from './components/Header';

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
		const updateProductState = () => {
			const { productId } = props.match.params;

			if (productId === 'new') {
				dispatch(ProductActions.newProduct());
			} else {
				dispatch(ProductActions.getProduct(productId));
			}
		};

		updateProductState();
	}, [dispatch, props.match.params]);

	useEffect(() => {
		if ((productData.data && !form) || (productData.data && form && productData.data.id !== form.id)) {
			setForm(productData.data);
		}
	}, [form, productData.data, setForm]);

	const handleChipChange = (value, name) => {
		setForm({ ...form, [name]: value.map((item) => item.value) });
	};

	const setFeaturedImage = (id) => {
		setForm({ ...form, featuredImageId: id });
	};

	const handleUploadChange = (e) => {
		const file = e.target.files[0];
		if (!file) {
			return;
		}
		const reader = new FileReader();
		reader.readAsBinaryString(file);

		reader.onload = () => {
			setForm({
				...form,
				images: [
					{
						id: FuseUtils.generateGUID(),
						url: `data:${file.type};base64,${btoa(reader.result)}`,
						type: 'image',
					},
					...form.images,
				],
			});
		};

		reader.onerror = () => {
			console.log('error on load image');
		};
	};

	if (
		!productData.data ||
		(productData.data &&
			props.match.params.productId !== productData.data.id &&
			props.match.params.productId !== 'new')
	) {
		return <FuseLoading />;
	}

	return (
		<FusePageCarded
			classes={{
				toolbar: 'p-0',
				header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
			}}
			header={form && <Header form={form} productData={productData} />}
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

export default withReducer('ProductForm', reducer)(Product);
