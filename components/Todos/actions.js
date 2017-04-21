export const createTodo = (title) => ({
  type: 'CREATE_TODO',
  todo: {
    id: Date.now(),
    title
  }
})

export const undoTodo = (id) => ({
  type: 'UNDO_TODO',
  id
})
