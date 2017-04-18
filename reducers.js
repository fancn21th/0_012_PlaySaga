import { combineReducers } from 'redux'
import counter from './components/Counter/reducer'
import user from './components/User/reducer'
import todos from './components/Todos/reducer'
import loginInfo from './components/Login/reducer'

const rootReducer = combineReducers({
  counter,
  user,
  todos,
  loginInfo
})

export default rootReducer
