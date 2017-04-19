import { takeLatest, take, put, call, fork, cancel, cancelled } from 'redux-saga/effects'
import { login, logout } from '../../api'

// export function* loginRequest(username, password, verificationCode) {
//   try{
//     const token = yield call(login, username, password, verificationCode)
//     yield put({type:'LOGIN_SUCCEED', token})
//     return token
//   }catch (error){
//     yield put({type:'LOGIN_FAILED', error})
//   }
// }
//
// export function* logoutRequest() {
//   try{
//     yield call(logout)
//     yield put({type:'LOGOUT_SUCCEED'})
//   }catch (error){
//     yield put({type:'LOGOUT_FAILED'})
//   }
// }
//
// export function* loginFlow() {
//   while(true){
//     const { username, password, verificationCode } = yield take('LOGIN_REQUEST')
//     // if loginRequest is failed, it will return an undefined value
//     // which will skip next process and wait for another LOGIN_REQUEST action
//     const token = yield call(loginRequest, username, password, verificationCode)
//     if(token){
//       yield take('LOGOUT_REQUEST')
//       yield call(logoutRequest)
//     }
//   }
// }

export function* loginRequest(username, password, verificationCode) {
  try{
    const token = yield call(login, username, password, verificationCode)
    yield put({type:'LOGIN_SUCCEED', token})
    return token
  }catch (error){
    yield put({type:'LOGIN_FAILED', error})
  }finally {
    if (yield cancelled()) {
      console.log('loginRequest task has been cancelled')
    }
  }
}

export function* logoutRequest() {
  try{
    yield call(logout)
    yield put({type:'LOGOUT_SUCCEED'})
  }catch (error){
    yield put({type:'LOGOUT_FAILED'})
  }
}

export function* loginNonBlockingFlow() {
  while(true){
    const { username, password, verificationCode } = yield take('LOGIN_REQUEST')
    const task = yield fork(loginRequest, username, password, verificationCode)
    const action = yield take(['LOGOUT_REQUEST','LOGIN_FAILED'])
    if(action.type === 'LOGOUT_REQUEST'){
      yield cancel(task)
    }
    yield call(logoutRequest)
  }
}

// export function* requestLogin(action) {
//   const token = yield call(
//     login,
//     action.username,
//     action.password,
//     action.verificationCode
//   )
//   if(token){
//     yield put({type:'LOGIN_SUCCEED', token})
//   }
// }
//
// export function* requestLogout() {
//   yield call(logout)
//   yield put({type:'LOGOUT_SUCCEED'})
// }
//
// export function* watchRequestLogin() {
//   yield takeLatest('LOGIN_REQUEST', requestLogin)
// }
//
// export function* watchRequestLogout () {
//   yield takeLatest('LOGOUT_REQUEST', requestLogout)
// }
