import { Box } from '@material-ui/core'
import React, { memo } from 'react'
import isEqual from 'react-fast-compare'

import OrderStatus from './OrderStatus'
import ProductsTable from './ProductsTable'
import ShippingAddress from './ShippingAddress'
import OrderPayment from './OrderPayment'

const OrderContent = ({ order }) => {
  const { customer, status, payment, products } = order
  const { avatar, firstName, lastName, email, phone, company } = customer
  const { color, name, date } = status
  const { transactionId, method, amount } = payment
  return (
    <Box className="p-16 sm:p-24 max-w-2xl w-full">
      {/* Order Details */}
      <Box>
        <ShippingAddress
          avatar={avatar}
          firstName={firstName}
          lastName={lastName}
          email={email}
          phone={phone}
          company={company}
        />

        <OrderStatus color={color} name={name} date={date} />

        <OrderPayment
          transactionId={transactionId}
          method={method}
          amount={amount}
          date={date}
        />
      </Box>

      {/* Products */}
      <ProductsTable products={products} />
    </Box>
  )
}

export default memo(OrderContent, isEqual)
