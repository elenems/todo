import * as A from "../actions/actionTypes";

const todos =
  localStorage.getItem("todos") === null
    ? []
    : JSON.parse(localStorage.getItem("todos"));
const initState = {
  todos,
  error: "",
  message:""
};

const todoReducer = (state = initState, action) => {
  if (action.type === A.ADD_TODO) {
    const newTodo = {
      title: action.payload,
      id: Math.random(),
      isChecked: false
    };
    return {
      ...state,
      todos: [newTodo, ...state.todos],
      error: ""
    };
  }

  if (action.type === A.REMOVE_TODO) {
    const id = action.payload;
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== id)
    };
  }

  if (action.type === A.TOGGLE_TODO_STATUS) {
    const id = action.payload;
    const todos = state.todos;
    let index = 0;
    for (let i = 0; i < state.todos.length; i++) {
      if (state.todos[i]["id"] === id) {
        index = i;
        break;
      }
    }

    todos[index]["isChecked"] = !todos[index]["isChecked"];
    return {
      ...state,
      todos
    };
  }

  if (action.type === A.SET_ERROR) {
    return {
      ...state,
      error: action.payload
    };
  }

  if (action.type === A.EDIT_TODO) {
    let index = 0;
    const id = action.payload.id;
    const todos = state.todos;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i]["id"] === id) {
        index = i;
        break;
      }
    }
    todos[index]["title"] = action.payload.title;
    return {
      ...state,
      error: "",
      todos
    };
  }

  if(action.type === A.SET_MESSAGE){
    return {
      ...state,
      message: action.payload
    }
  }

  return state;
};

export default todoReducer;
