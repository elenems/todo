import * as A from "./actionTypes";
export const addTodo = (title) => {
    return {type:A.ADD_TODO, payload:title}
}
