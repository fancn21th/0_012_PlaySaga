import React, { PropTypes } from 'react';
import Counter from '../Counter'
import User from '../User'
import Todos from '../Todos'
import Login from '../Login'
import { createTodo } from '../Todos/actions'
import { login, logout } from '../Login/actions'

const App = ({ store }) => {

  const action = type => store.dispatch({type})

  return (
    <div>
      <Counter
        value={store.getState().counter}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />
      <User
        users={store.getState().user.users}
        onRequestUser={() => action('REQUEST_USER')}
      />
      <Todos
        todos={store.getState().todos.todoList}
        showCongrats={store.getState().todos.congrats}
        onCreateTodo={(title) => store.dispatch(createTodo(title))}
      />
      <Login
        token={store.getState().loginInfo.token.token || ''}
        onLogin={(username, password, verificationCode) => store.dispatch(login(username, password, verificationCode))}
        onLogout={() => store.dispatch(logout())}
      />
    </div>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
