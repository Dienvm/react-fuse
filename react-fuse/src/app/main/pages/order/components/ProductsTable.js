import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import { TABLE_HEAD } from 'app/constants'
import {
  Box,
  Typography,
  Icon,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@material-ui/core'

const ProductsTable = ({ order }) => (
  <Box className="pb-48">
    <Box className="pb-16 flex items-center">
      <Icon color="action">burst_mode</Icon>
      <Typography className="h2 mx-16" color="textSecondary">
        Products ordered
      </Typography>
    </Box>

    <Box className="table-responsive">
      <Table className="simple">
        <TableHead>
          <TableRow>
            {TABLE_HEAD.ORDER_PRODUCTS.map((title, index) => (
              <TableCell key={index.toString()}>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {order.products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="w-64">{product.id}</TableCell>
              <TableCell className="w-180">
                <img
                  className="product-image"
                  src={product.image}
                  alt="product"
                />
              </TableCell>
              <TableCell>
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
              </TableCell>
              <TableCell className="w-64 text-right">
                <span className="truncate">${product.price}</span>
              </TableCell>
              <TableCell className="w-64 text-right">
                <span className="truncate">{product.quantity}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Box>
)

export default memo(ProductsTable)
