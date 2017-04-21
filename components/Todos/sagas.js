import { take, put, takeEvery, spawn } from 'redux-saga/effects'

export function* watchFirstThreeTodosCreation() {
  for(let i = 0; i < 3; i++){
    const action = yield take('CREATE_TODO')
  }
  yield put({type: 'SHOW_CONGRATS'})
}

export function* undoTodoCreation(action) {
  const { id } = action
  yield put({type:'REMOVE_TODO',id})
}

export function* watchUndoTodoCreation() {
  while(true){
    const action = yield take('UNDO_TODO')
    yield spawn(undoTodoCreation, action)
  }
}

