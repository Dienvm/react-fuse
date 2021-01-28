import React, { memo } from 'react'
import isEqual from 'react-fast-compare'

import FuseChipSelect from '@fuse/core/FuseChipSelect'
import Icon from '@material-ui/core/Icon'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import clsx from 'clsx'
import FuseLoading from '@fuse/core/FuseLoading'

const TableForm = ({
  form,
  handleChange,
  handleChipChange,
  handleUploadChange,
  setFeaturedImage,
  classes,
  loadingImage,
}) => (
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
  </div>
)

const areEqual = (prevProps, nextProps) =>
  isEqual(prevProps.form, nextProps.form)

export default memo(TableForm, areEqual)
