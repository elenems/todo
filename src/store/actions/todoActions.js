import * as A from "./actionTypes";
export const addTodo = title => {
  return { type: A.ADD_TODO, payload: title };
};

export const removeTodo = id => {
  return {type: A.REMOVE_TODO, payload: id}
}
