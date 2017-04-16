import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchUser } from '../../api'

export function* requestUser(){
  try{
    const users = yield call(fetchUser)
    yield put({type: 'RECIEVE_USER', users})
  } catch (error) {
    console.error('failed to recieve user', error)
  }
}

export function* watchRequestUser(){
  yield takeEvery('REQUEST_USER', requestUser)
}
