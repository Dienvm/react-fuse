import auth from 'app/auth/store/reducers'
import {combineReducers} from 'redux'
import fuse from './fuse'
import product from './product'
import order from './order'
import user from './user'

const createReducer = (asyncReducers) =>
  combineReducers({
    auth,
    fuse,
    product,
    order,
    user,
    ...asyncReducers,
  })

export default createReducer
