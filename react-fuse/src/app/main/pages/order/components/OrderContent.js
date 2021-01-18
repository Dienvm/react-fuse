import { Box } from '@material-ui/core'
import React, { memo } from 'react'
import OrderStatus from './OrderStatus'
import ProductsTable from './ProductsTable'
import ShippingAddress from './ShippingAddress'
import OrderPayment from './OrderPayment'

const OrderContent = ({ order }) => {
  const { customer, status, payment } = order
  return (
    <Box className="p-16 sm:p-24 max-w-2xl w-full">
      {/* Order Details */}
      <Box>
        <ShippingAddress customer={customer} />

        <OrderStatus orderStatus={status} />

        <OrderPayment orderPayment={payment} />
      </Box>

      {/* Products */}
      <ProductsTable order={order} />
    </Box>
  )
}

export default memo(OrderContent)
