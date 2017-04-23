let count = 0

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: count++,
  text,
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id,
})

