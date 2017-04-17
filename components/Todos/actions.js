export const createTodo = (title) => ({
  type: 'CREATE_TODO',
  todo: {
    id: Date.now(),
    title
  }
})
