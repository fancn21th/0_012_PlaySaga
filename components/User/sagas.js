import { call, put, takeEvery, takeLatest, take, select } from 'redux-saga/effects'
import { fetchUser } from '../../api'

export function* requestUser(){
  try{
    const users = yield call(fetchUser)
    yield put({type: 'RECIEVE_USER', users})
  } catch (error) {
    yield call(console.error, ['failed to recieve user', error])
  }
}

export function* recieveUser() {
  console.log('user has been recieved', Date.now())
}

export function* watchRequestUser(){
  yield takeLatest('REQUEST_USER', requestUser)
  yield takeEvery('RECIEVE_USER', recieveUser)
}

// export function* watchAndLog() {
//   yield takeEvery('*', function (action) {
//     const state = select()
//
//     console.log(action)
//     console.log(state)
//   })
//
//   // while(true){
//   //   const action = take('*')
//   //   const state = select()
//   //
//   //   console.log(action)
//   //   console.log(state)
//   // }
// }
