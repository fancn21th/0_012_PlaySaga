import { combineReducers } from 'redux'
import counter from './components/Counter/reducer'
import user from './components/User/reducer'

const rootReducer = combineReducers({
  counter,
  user
})

export default rootReducer
