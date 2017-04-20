import { createAction, createReducer } from 'redux-act'

const initialState = {
  todoList: [],
}

const addTodo = createAction('add todo')
const deleteTodo = createAction('delete todo')

export default createReducer({
  [addTodo]: (state) => ({ todoList: state.todoList.push }),
  [deleteTodo]: (state, key) => ({
    todoList: state.todoList.splice(key)
  }),
}, initialState)

