import React from 'react'
import FusePageCarded from '@fuse/core/FusePageCarded'

import OrdersHeader from './components/OrdersHeader'
import OrdersTable from './components/OrdersTable'

const OrdersPage = (props) => (
  <FusePageCarded
    classes={{
      content: 'flex',
      header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
    }}
    header={<OrdersHeader />}
    content={<OrdersTable />}
    innerScroll
  />
)

export default OrdersPage
