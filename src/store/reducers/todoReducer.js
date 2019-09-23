import * as A from "../actions/actionTypes";

const initState = {
  todos: []
};

const todoReducer = (state = initState, action) => {
  if (action.type === A.ADD_TODO) {
    const newTodo = { title: action.payload, id: Math.random() };
    return {
      ...state,
      todos: [...state.todos, newTodo]
    };
  }
  return state;
};

export default todoReducer;
