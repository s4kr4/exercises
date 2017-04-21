import { createReducer } from 'redux-act'
import { addTodo, deleteTodo, doneTodo } from '../actions'

const initialState = {
  todos: [],
}

export default createReducer({
  [addTodo]: (state, text) => ({
    todos: state.todos.concat({
      todo: text,
      done: false
    })
  }),
  [deleteTodo]: (state) => ({
    todos: state.todos.splice()
  }),
  [doneTodo]: (state) => ({
  }),
}, initialState)

