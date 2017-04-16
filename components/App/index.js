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
        user={store.getState().user}
      />
    </div>
  )
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
