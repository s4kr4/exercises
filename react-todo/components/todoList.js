import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { addTodo, deleteTodo, toggleTodo } from '../actions'
import Todo from './todo.js'

class TodoList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      text: ""
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  keyDown(e) {
    if (e.key === 'Enter') {
      this.addTodo()
    }
  }

  addTodo() {
    if (this.state.text !== "") {
      this.props.dispatch(addTodo(this.state.text))
      this.setState({
        text: ""
      })
    }
  }

  render() {
    return (
      <div>
        <RaisedButton
          label="ADD"
          primary={ true }
          style={{ margin:10 }}
          onClick={ this.addTodo.bind(this) } />
        <TextField
          hintText="TODO"
          value={ this.state.text }
          onKeyDown= { this.keyDown.bind(this) }
          onChange={ this.handleChange.bind(this) }
          />
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

