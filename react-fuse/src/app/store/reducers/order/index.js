import { combineReducers } from 'redux'
import order from './order.reducer'
import orders from './orders.reducer'

const orderReducer = combineReducers({
  orders,
  order,
})

export default orderReducer
