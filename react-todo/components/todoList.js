import React from 'react'
import { connect } from 'react-redux'

import { addTodo, deleteTodo, toggleTodo } from '../actions'
import Todo from './todo.js'

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  render() {
    return (
      <div>
        <button onClick={ () => {
          this.props.dispatch(addTodo(this.state.text))
          this.setState({
            text: ""
          })
        }}>ADD</button>
        <input id="add" type="text" placeholder="TODO" value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })} />
        <ul className="todo-list">
          {
            this.props.todos.map((todo) => (
              <Todo text={ todo.text }
                done={ todo.done }
                onClick={ () => this.props.dispatch(toggleTodo(todo.id)) }
                key={ todo.id } />
            ))
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps)(TodoList)

