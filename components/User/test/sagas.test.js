import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'
import { watchRequestUser, requestUser, recieveUser } from '../sagas'
import { fetchUser } from '../../../api'

test('watchRequestUser Saga test', () => {
  const gen = watchRequestUser()

  expect(gen.next().value).toEqual(takeLatest('REQUEST_USER', requestUser))
  expect(gen.next().value).toEqual(takeEvery('RECIEVE_USER', recieveUser))
  expect(gen.next()).toEqual({value: undefined, done: true})
})

test('recieveUser Saga test', () => {
  const gen = recieveUser()

  expect(gen.next()).toEqual({value: undefined, done: true})
})

test('requestUser Saga test succeed', () => {
  const gen = requestUser()

  expect(gen.next().value).toEqual(call(fetchUser))
  expect(gen.next().value).toEqual(put({type: 'RECIEVE_USER', users: undefined}))
  expect(gen.next()).toEqual({value: undefined, done: true})
})

test('requestUser Saga test failed', () => {
  const gen = requestUser()

  expect(gen.next().value).toEqual(call(fetchUser))

  const error = {}

  expect(gen.throw(error).value).toEqual(call(console.error, ['failed to recieve user', error]))
  expect(gen.next()).toEqual({value: undefined, done: true})
})

