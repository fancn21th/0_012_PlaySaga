import { takeLatest, take, put, call } from 'redux-saga/effects'
import { login, logout } from '../../api'

export function* requestLogin(action) {
  const token = yield call(
    login,
    action.username,
    action.password,
    action.verificationCode
  )
  if(token){
    yield put({type:'LOGIN_SUCCEED', token})
  }
}

export function* requestLogout() {
  yield call(logout)
  yield put({type:'LOGOUT_SUCCEED'})
}

export function* watchRequestLogin() {
  yield takeLatest('LOGIN_REQUEST', requestLogin)
}

export function* watchRequestLogout () {
  yield takeLatest('LOGOUT_REQUEST', requestLogout)
}
