import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { TABLE_HEAD } from 'app/constants'
import { Box, Typography, Icon, Grid } from '@material-ui/core'
import isEqual from 'react-fast-compare'

const ProductsTable = ({ products }) => (
  <Box className="pb-48">
    <Box className="pb-16 flex items-center">
      <Icon color="action">burst_mode</Icon>
      <Typography className="h2 mx-16" color="textSecondary">
        Products ordered
      </Typography>
    </Box>

    <Box className="table-responsive">
      <Grid container spacing={3}>
        {TABLE_HEAD.ORDER_PRODUCTS.map((title, index) => (
          <Grid item xs={2} key={index.toString()}>
            <Box>{title}</Box>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {products.map((product) => (
          <React.Fragment key={product.id}>
            <Grid item xs={2}>
              <Typography>{product.id}</Typography>
            </Grid>
            <Grid item xs={2}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </Grid>
            <Grid item xs={2}>
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
            </Grid>
            <Grid item xs={2}>
              <span className="truncate">${product.price}</span>
            </Grid>
            <Grid item xs={2}>
              <span className="truncate">{product.quantity}</span>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Box>
  </Box>
)

export default memo(ProductsTable, isEqual)
