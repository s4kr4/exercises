import React from 'react'
import ReactDOM from 'react-dom'

import todos from '../assets/data/mock'

export default class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {todos: todos}
  }

  render() {
    return (
      <div className="todo-list">
        {
          Object.keys(todos).map((key) => (
            <div className="todo">{todos[key].todo}</div>
          ))
        }
      </div>
    )
  }
}


