import { watchIncrementAsync,  helloSaga } from './components/Counter/sagas'
import { watchRequestUser, watchAndLog } from './components/User/sagas'
import { watchFirstThreeTodosCreation } from './components/Todos/sagas'
import { loginNonBlockingFlow } from './components/Login/sagas'

// two resulting Generators will be started in parallel
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    watchRequestUser(),
    // watchAndLog(),
    watchFirstThreeTodosCreation(),
    loginNonBlockingFlow()
  ]
}
