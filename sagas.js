import { watchIncrementAsync,  helloSaga} from './components/Counter/sagas'

// two resulting Generators will be started in parallel
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
