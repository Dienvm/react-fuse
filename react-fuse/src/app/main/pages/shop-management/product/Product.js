import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isEqual from 'react-fast-compare'

import reducer from 'app/store/reducers'
import * as ProductActions from 'app/store/actions'
import FuseLoading from '@fuse/core/FuseLoading'
import FusePageCarded from '@fuse/core/FusePageCarded'
import { useForm } from '@fuse/hooks'
import FuseUtils from '@fuse/utils'

import firebaseService from 'app/services/firebaseService'
import { ROUTES } from 'app/constants'
import { useStyles } from 'app/themes'
import TableForm from './components/TableForm'
import Header from './components/Header'

const ProductPage = (props) => {
  const dispatch = useDispatch()
  const productData = useSelector(({ product }) => product.product)

  const classes = useStyles(props)
  const { form, handleChange, setForm } = useForm(null)
  const [loadingImage, setLoadingImage] = useState(false)
  const { productId } = props.match.params

  useEffect(() => {
    const updateProductState = () => {
      if (productId === 'new') {
        dispatch(ProductActions.newProduct())
      } else {
        dispatch(ProductActions.getProduct(productId))
      }
    }

    updateProductState()
  }, [dispatch, productId])

  useEffect(() => {
    if (
      (productData.data && !form) ||
      (productData.data && form && productData.data.id !== form.id)
    ) {
      setForm(productData.data)
    }
  }, [form, productData.data])

  useEffect(() => {
    if (
      productData.type === ProductActions.SAVE_PRODUCT ||
      productData.type === ProductActions.UPDATE_PRODUCT
    ) {
      props.history.push({
        pathname: ROUTES.products,
      })
    }
  }, [productData])

  const handleChipChange = useCallback(
    (value, name) => {
      setForm({ ...form, [name]: value.map((item) => item.value) })
    },
    [form]
  )

  const setFeaturedImage = useCallback(
    (id) => {
      setForm({ ...form, featuredImageId: id })
    },
    [form]
  )

  const handleUploadChange = (e) => {
    const file = e.target.files[0]

    if (!file) {
      return
    }

    const uploadTask = firebaseService.storage
      .ref(`products/${file.name}`)
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
          .ref('products')
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

  if (
    !productData.data ||
    (productData.data &&
      productId !== productData.data.id &&
      productId !== 'new')
  ) {
    return <FuseLoading />
  }

  return (
    <FusePageCarded
      classes={{
        toolbar: 'p-0',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={
        form && (
          <Header form={form} productData={productData} productId={productId} />
        )
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
            loadingImage={loadingImage}
          />
        )
      }
      innerScroll
    />
  )
}

export default memo(ProductPage, isEqual)
