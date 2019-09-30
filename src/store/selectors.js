export const selectLastTodo = (state) => {
    const todos = state.todo.todos;
    return todos[0];
}

export const selectAllTodos = (state) => {
    return state.todo.todos;
}