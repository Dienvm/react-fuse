import React from 'react'

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
}) => {
  return (
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
            },
            variant: 'outlined',
          }}
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
      <div>
        <TextField
          className="mt-8 mb-16"
          label="Tax Excluded Price"
          id="priceTaxExcl"
          name="priceTaxExcl"
          value={form.priceTaxExcl}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          variant="outlined"
          autoFocus
          fullWidth
        />

        <TextField
          className="mt-8 mb-16"
          label="Tax Included Price"
          id="priceTaxIncl"
          name="priceTaxIncl"
          value={form.priceTaxIncl}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          variant="outlined"
          fullWidth
        />

        <TextField
          className="mt-8 mb-16"
          label="Tax Rate"
          id="taxRate"
          name="taxRate"
          value={form.taxRate}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          variant="outlined"
          fullWidth
        />

        <TextField
          className="mt-8 mb-16"
          label="Compared Price"
          id="comparedPrice"
          name="comparedPrice"
          value={form.comparedPrice}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          type="number"
          variant="outlined"
          fullWidth
          helperText="Add a compare price to show next to the real price"
        />
      </div>
      {/* inventory */}
      <div>
        <TextField
          className="mt-8 mb-16"
          required
          label="SKU"
          autoFocus
          id="sku"
          name="sku"
          value={form.sku}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />

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
        />
      </div>
      {/* Shipping */}
      <div>
        <div className="flex -mx-4">
          <TextField
            className="mt-8 mb-16 mx-4"
            label="Width"
            autoFocus
            id="width"
            name="width"
            value={form.width}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />

          <TextField
            className="mt-8 mb-16 mx-4"
            label="Height"
            id="height"
            name="height"
            value={form.height}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />

          <TextField
            className="mt-8 mb-16 mx-4"
            label="Depth"
            id="depth"
            name="depth"
            value={form.depth}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          />
        </div>

        <TextField
          className="mt-8 mb-16"
          label="Weight"
          id="weight"
          name="weight"
          value={form.weight}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />

        <TextField
          className="mt-8 mb-16"
          label="Extra Shipping Fee"
          id="extraShippingFee"
          name="extraShippingFee"
          value={form.extraShippingFee}
          onChange={handleChange}
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          fullWidth
        />
      </div>
    </div>
  )
}

export default TableForm
