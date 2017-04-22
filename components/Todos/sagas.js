import { take, call, put, takeEvery, spawn, race } from 'redux-saga/effects'
import { delay } from 'redux-saga'

export function* watchFirstThreeTodosCreation() {
  for(let i = 0; i < 3; i++){
    const action = yield take('CREATE_TODO')
  }
  yield put({type: 'SHOW_CONGRATS'})
}

export function* createTodo(action) {
  const { todo } = action
  const { id } = todo

  const { undo, create } = yield race({
    undo: take(action => action.type === 'UNDO_TODO' && action.id === id),
    create: call(delay, 2000)
  })

  if(undo){
    yield put({type:'REMOVE_TODO', id})
  }else if(create){
    yield put({type:'LOCK_UNDO', id})
  }
}

export function* watchTodoCreation() {
  while(true){
    const action = yield take('CREATE_TODO')
    yield spawn(createTodo, action)
  }
}

