import React, { PropTypes } from 'react';
import Counter from '../Counter'
import User from '../User'

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
    </div>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
