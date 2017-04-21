import React from 'react'
import { connect } from 'react-redux'
import { addTodo, deleteTodo, doneTodo } from '../actions'

import todos from '../assets/data/mock'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.dispatch(addTodo("test"))}>ADD</button>
        <input type="text" placeholder="TODO" />
        <ul className="todo-list">
          {
            this.props.todos.map((todo, i) => (
              <li className="todo" key={i}>{ todo.todo }</li>
            ))
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ todos }) {
  return { todos }
}

export default connect(mapStateToProps)(TodoList)

