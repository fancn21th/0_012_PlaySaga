import { combineReducers } from 'redux'
import counter from './components/Counter/reducer'
import user from './components/User/reducer'
import todos from './components/Todos/reducer'

const rootReducer = combineReducers({
  counter,
  user,
  todos
})

export default rootReducer
