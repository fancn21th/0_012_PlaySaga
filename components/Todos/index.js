import React, { Component, PropTypes } from 'react'
import CancelButton from '../CancelButton'

class Todos extends Component {

  createTodo = () => {
    const { onCreateTodo } = this.props
    if(this.textInput.value){
      onCreateTodo(this.textInput.value)
    }
  }

  render(){
    const { todos, showCongrats, undos, onUndoTodo } = this.props
    const congrats = showCongrats ? <p> Congrats! You have created three new todos!</p> : ''
    return (
      <div>
        <h3>Todos</h3>
        <hr />
        <input
          type="text"
          ref={(input) => { this.textInput = input; }} />
        <button onClick={this.createTodo}>
          Create Todo
        </button>
        {congrats}
        <ul>
          {
            todos.map(todo =>
              (
                <li key={todo.id}>
                  {todo.title}
                  {
                    undos[todo.id] === true ?
                      (
                        <CancelButton
                          id={todo.id}
                          onClick={onUndoTodo}
                        />
                      )
                      :
                      null
                  }
                </li>
              )
            )
          }
        </ul>
      </div>
    )
  }
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  showCongrats: PropTypes.bool.isRequired,
  onCreateTodo: PropTypes.func.isRequired,
  onUndoTodo: PropTypes.func.isRequired
}

export default Todos
