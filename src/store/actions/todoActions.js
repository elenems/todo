import * as A from "./actionTypes";
export const addTodo = title => {
  return { type: A.ADD_TODO, payload: title };
};

export const removeTodo = id => {
  return { type: A.REMOVE_TODO, payload: id };
};

export const toggleTodoStatus = id => {
  return {
    type: A.TOGGLE_TODO_STATUS,
    payload: id
  };
};

export const setError = errorMsg => {
  return {
    type: A.SET_ERROR,
    payload: errorMsg
  }
}

export const editTodo = payload => {
  return {
    type: A.EDIT_TODO,
    payload: payload
  }
}

export const setMessage = message => {
  return {
    type:A.SET_MESSAGE,
    payload: message
  }
}

