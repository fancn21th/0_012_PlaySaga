import { incrementAsync } from '../sagas'
import { delay } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

test('incrementAsync Saga tes', () => {
  const gen = incrementAsync()

  expect(gen.next().value).toEqual(call(delay, 1000))
});
