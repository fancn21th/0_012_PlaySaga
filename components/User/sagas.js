import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { fetchUser } from '../../api'

export function* requestUser(){
  try{
    const users = yield call(fetchUser)
    yield put({type: 'RECIEVE_USER', users})
  } catch (error) {
    console.error('failed to recieve user', error)
  }
}

export function* recieveUser() {
  console.log('user has been recieved', Date.now())
}

export function* watchRequestUser(){
  yield takeLatest('REQUEST_USER', requestUser)
  yield takeEvery('RECIEVE_USER', recieveUser)
}
