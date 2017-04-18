import { combineReducers } from 'redux'

const loginUser = (state = { username: null }, action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return Object.assign(state, {username: action.username})
    default:
      return state
  }
}

const token = (state = { token: null }, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEED':
      return Object.assign(state, {token: action.token})
    case 'LOGOUT_SUCCEED':
      return Object.assign(state, {token: null})
    default:
      return state
  }
}

const loginInfo = combineReducers({
  loginUser,
  token
})

export default loginInfo
