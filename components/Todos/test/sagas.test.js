import { take, put } from 'redux-saga/effects'
import { watchFirstThreeTodosCreation } from '../sagas'

test('watchFirstThreeTodosCreation saga test', () => {
  const gen = watchFirstThreeTodosCreation()

  expect(gen.next().value).toEqual(take('CREATE_TODO'))
  expect(gen.next().value).toEqual(take('CREATE_TODO'))
  expect(gen.next().value).toEqual(take('CREATE_TODO'))
  expect(gen.next().value).toEqual(put({type: 'SHOW_CONGRATS'}))
  expect(gen.next()).toEqual({value:undefined,done:true})

})

