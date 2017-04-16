import { incrementAsync, helloSaga, watchIncrementAsync } from '../sagas'
import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

test('incrementAsync Saga test', () => {
  const gen = incrementAsync()

  expect(gen.next().value).toEqual(call(delay, 1000))
  expect(gen.next().value).toEqual(put({ type: 'INCREMENT' }))
  expect(gen.next()).toEqual({value: undefined, done: true})
})

test('helloSaga Saga test', () => {
  const gen = helloSaga()

  expect(gen.next()).toEqual({value: undefined, done: true})
})

test('watchIncrementAsync Saga test', () => {
  const gen = watchIncrementAsync()

  expect(gen.next()).toEqual(takeEvery('INCREMENT_ASYNC', incrementAsync))
  expect(gen.next()).toEqual({value: undefined, done: true})
})
