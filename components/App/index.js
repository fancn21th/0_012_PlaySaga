import React, { PropTypes } from 'react';
import Counter from '../Counter'
import User from '../User'
import Todos from '../Todos'
import Login from '../Login'
import { createTodo, undoTodo } from '../Todos/actions'
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
        undos={store.getState().todos.undoList}
        showCongrats={store.getState().todos.congrats}
        onCreateTodo={(title) => store.dispatch(createTodo(title))}
        onUndoTodo={(id) => store.dispatch(undoTodo(id))}
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
