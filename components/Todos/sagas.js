import { take, put } from 'redux-saga/effects'

export function* watchFirstThreeTodosCreation() {
  for(let i = 0; i < 3; i++){
    const action = yield take('CREATE_TODO')
  }
  yield put({type: 'SHOW_CONGRATS'})
}

