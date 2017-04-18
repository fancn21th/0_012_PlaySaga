import React, { PropTypes } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <h3>Counter</h3>
    <hr />
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    {' '}
    <button onClick={onIncrementAsync}>Increment after 1 second</button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
}

export default Counter
