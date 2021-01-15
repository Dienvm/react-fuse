import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import * as Actions from 'app/store/actions'
import reducer from 'app/store/reducers'

import FusePageCarded from '@fuse/core/FusePageCarded'
import withReducer from 'app/store/withReducer'

import OrderHeader from './components/OrderHeader'
import OrderContent from './components/OrderContent'

const Order = (props) => {
  const dispatch = useDispatch()
  const orderData = useSelector(({order}) => order.order)
  const {orderId} = props.match.params || {}

  useEffect(() => {
    dispatch(Actions.getOrder(orderId))
  }, [dispatch, orderId])

  return (
    <FusePageCarded
      classes={{
        content: 'flex',
        header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
      }}
      header={!!orderData && <OrderHeader order={orderData} />}
      content={orderData && <OrderContent order={orderData} />}
      innerScroll
    />
  )
}

export default withReducer('OrderDetail', reducer)(Order)
