import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isEqual from 'react-fast-compare'

import * as ProductActions from 'app/store/actions'
import { TextField, Icon, Button } from '@material-ui/core'
import { useForm } from '@fuse/hooks'
import FuseUtils from '@fuse/utils'

import firebaseService from 'app/services/firebaseService'
import { ROUTES } from 'app/constants'
import { useStyles } from 'app/themes'
import { COLLECTIONS } from 'app/helpers'
import { useParams, withRouter } from 'react-router'
import clsx from 'clsx'
import FuseChipSelect from '@fuse/core/FuseChipSelect'
import FuseLoading from '@fuse/core/FuseLoading'
import FuseAnimate from '@fuse/core/FuseAnimate'

const TableForm = (props) => {
  const dispatch = useDispatch()
  const productData = useSelector(({ product }) => product.product.data)
  const type = useSelector(({ product }) => product.product.type)

  const classes = useStyles(props)
  const { form, handleChange, setForm } = useForm(null)
  const [loadingImage, setLoadingImage] = useState(false)
  const params = useParams()
  const { productId } = params

  useEffect(() => {
    const updateProductState = () => {
      if (productId === 'new') {
        dispatch(ProductActions.newProduct())
      } else {
        dispatch(ProductActions.getProduct(productId))
      }
    }

    updateProductState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])

  useEffect(() => {
    if (
      (productData && !form) ||
      (productData && form && productData.id !== form.id)
    ) {
      setForm(productData)
    }
  }, [form, productData, setForm])

  useEffect(() => {
    if (
      type === ProductActions.SAVE_PRODUCT ||
      type === ProductActions.UPDATE_PRODUCT
    ) {
      props.history.push({
        pathname: ROUTES.products,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])

  const handleChipChange = useCallback(
    (value, name) => {
      setForm({ ...form, [name]: value.map((item) => item.value) })
    },
    [form, setForm]
  )

  const setFeaturedImage = useCallback(
    (id) => {
      setForm({ ...form, featuredImageId: id })
    },
    [form, setForm]
  )

  const handleUploadChange = (e) => {
    const file = e.target.files[0]

    if (!file) {
      return
    }

    const uploadTask = firebaseService.storage
      .ref(`${COLLECTIONS.PRODUCTS}/${file.name}`)
      .put(file)
    uploadTask.on(
      'state_changed',
      (snapShot) => {
        setLoadingImage(true)
      },
      (err) => {
        setLoadingImage(false)
      },
      () => {
        firebaseService.storage
          .ref(COLLECTIONS.PRODUCTS)
          .child(file.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setLoadingImage(false)
            setForm({
              ...form,
              images: [
                {
                  id: FuseUtils.generateGUID(),
                  url: fireBaseUrl,
                  type: 'image',
                },
                ...form.images,
              ],
            })
          })
      }
    )
  }

  const canBeSubmitted = () => {
    return form.name.length > 0 && !isEqual(productData, form)
  }

  const handleSaveProduct = () => {
    if (productId === 'new') {
      dispatch(ProductActions.saveProduct(form))
    } else {
      dispatch(ProductActions.updateProduct(productId, form))
    }
  }

  if (
    !productData ||
    (productData && productId !== productData.id && productId !== 'new')
  ) {
    return <FuseLoading />
  }

  console.log('RE-RENDER Table Form')
  return (
    form && (
      <div className="p-16 sm:p-24 max-w-2xl">
        {/* Common information */}
        <div>
          <TextField
            className="mt-8 mb-16"
            error={form.name === ''}
            required
            label="Name"
            autoFocus
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            inputProps={{
              'data-cy': 'cy-product-input-name',
            }}
          />

          <TextField
            className="mt-8 mb-16"
            id="description"
            name="description"
            onChange={handleChange}
            label="Description"
            type="text"
            value={form.description}
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            inputProps={{
              'data-cy': 'cy-product-input-description',
            }}
          />

          <FuseChipSelect
            className="mt-8 mb-24"
            value={form.categories.map((item) => ({
              value: item,
              label: item,
            }))}
            onChange={(value) => handleChipChange(value, 'categories')}
            placeholder="Select multiple categories"
            textFieldProps={{
              label: 'Categories',
              InputLabelProps: {
                shrink: true,
              },
              variant: 'outlined',
            }}
            inputProps={{
              'data-cy': 'cy-product-input-categories',
            }}
            isMulti
            dataCy="cy-product-input-categories"
          />

          <FuseChipSelect
            className="mt-8 mb-16"
            value={form.tags.map((item) => ({
              value: item,
              label: item,
            }))}
            onChange={(value) => handleChipChange(value, 'tags')}
            placeholder="Select multiple tags"
            textFieldProps={{
              label: 'Tags',
              InputLabelProps: {
                shrink: true,
                'data-cy': 'cy-product-input-tags',
              },
              variant: 'outlined',
            }}
            dataCy="cy-product-input-tags"
            isMulti
          />
        </div>

        {/* Images */}
        <div>
          <div className="flex justify-center sm:justify-start flex-wrap -mx-8">
            <label
              htmlFor="button-file"
              className={clsx(
                classes.productImageUpload,
                'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
              )}
            >
              <input
                accept="image/*"
                className="hidden"
                id="button-file"
                type="file"
                onChange={handleUploadChange}
              />
              <Icon fontSize="large" color="action">
                cloud_upload
              </Icon>
            </label>
            {form.images.map((media) => (
              <div
                onClick={() => setFeaturedImage(media.id)}
                onKeyDown={() => setFeaturedImage(media.id)}
                role="button"
                tabIndex={0}
                className={clsx(
                  classes.productImageItem,
                  'flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5',
                  media.id === form.featuredImageId && 'featured'
                )}
                key={media.id}
              >
                <Icon className={classes.productImageFeaturedStar}>star</Icon>
                <img
                  className="max-w-none w-auto h-full"
                  src={media.url}
                  alt="product"
                />
              </div>
            ))}
            {loadingImage && (
              <div className="flex items-center justify-center relative w-128 h-128 rounded-4 mx-8 mb-16 overflow-hidden cursor-pointer shadow-1 hover:shadow-5">
                <FuseLoading />
              </div>
            )}
          </div>
        </div>

        {/* pricing */}
        <TextField
          className="mt-8 mb-16"
          label="Price"
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
          // InputProps={{
          //   startAdornment: <InputAdornment position="start">$</InputAdornment>,
          // }}
          inputProps={{
            'data-cy': 'cy-product-input-price',
          }}
          type="number"
          variant="outlined"
          autoFocus
          fullWidth
        />
        {/* inventory */}
        <TextField
          className="mt-8 mb-16"
          label="Quantity"
          id="quantity"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          variant="outlined"
          type="number"
          fullWidth
          inputProps={{
            'data-cy': 'cy-product-input-quantity',
          }}
        />

        {/* Shipping */}
        <TextField
          className="mt-8 mb-16"
          label="Shipping Fee"
          id="extraShippingFee"
          name="extraShippingFee"
          value={form.extraShippingFee}
          onChange={handleChange}
          variant="outlined"
          // InputProps={{
          //   startAdornment: <InputAdornment position="start">$</InputAdornment>,
          // }}
          inputProps={{
            'data-cy': 'cy-product-input-shipping',
          }}
          fullWidth
        />

        <FuseAnimate animation="transition.slideRightIn" delay={300}>
          <Button
            className="whitespace-no-wrap normal-case"
            variant="contained"
            color="secondary"
            disabled={!canBeSubmitted()}
            onClick={handleSaveProduct}
            data-cy="cy-product-save"
          >
            Save
          </Button>
        </FuseAnimate>
      </div>
    )
  )
}

// const areEqual = (prevProps, nextProps) =>
//   isEqual(prevProps.form, nextProps.form)

export default withRouter(memo(TableForm, isEqual))
