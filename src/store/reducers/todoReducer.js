import * as A from "../actions/actionTypes";

const todos = localStorage.getItem('todos') === null ? [] : JSON.parse(localStorage.getItem('todos'));
const initState = {
  todos
};

const todoReducer = (state = initState, action) => {
  if (action.type === A.ADD_TODO) {
    const newTodo = { title: action.payload, id: Math.random() };
    return {
      ...state,
      todos: [newTodo, ...state.todos]
    };
  }

  if(action.type === A.REMOVE_TODO){
    const id = action.payload;
    return {
      ...state,
      todos: state.todos.filter(todo=>todo.id !== id)
    }
  }

  return state;
};

export default todoReducer;
