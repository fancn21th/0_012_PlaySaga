import { takeLatest, take, put, call } from 'redux-saga/effects'
import { login } from '../../api'

export function* requestLogin(action) {
  const token = yield call(login, [
    action.username,
    action.password,
    action.verificationCode
  ])
  if(token){
    yield put({type:'LOGIN_SUCCEED', token})
  }
}

export function* watchRequestLogin() {
  yield takeLatest('REQUEST_LOGIN', requestLogin)
}
