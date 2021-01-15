import {combineReducers} from 'redux'
import user from './user.reducer'
import users from './users.reducer'

const userReducer = combineReducers({
  users,
  user,
})

export default userReducer
