import { all, takeLatest, select } from "redux-saga/effects";
import * as A from "./actions/actionTypes";
import * as Selectors from "./selectors";
export const storeTodo = function* storeTodo() {
  const lastTodo = yield select(Selectors.selectLastTodo);
  const todos =
    localStorage.getItem("todos") === null
      ? [lastTodo]
      : [lastTodo, ...JSON.parse(localStorage.getItem("todos"))];
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const watchAddTodo = function* watchAddTodo() {
  yield takeLatest(A.ADD_TODO, storeTodo);
};

export const removeStoredTodo = function* removeStoredTodo() {
  const todos = yield select(Selectors.selectAllTodos);
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const watchRemoveStoredTodo = function* watchRemoveStoredTodo() {
  yield takeLatest(A.REMOVE_TODO, removeStoredTodo);
};

export const toggleTodoStatus = function* toggleTodoStatus() {
  const todos = yield select(Selectors.selectAllTodos);
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const watchToggleTodoStatus = function* watchToggleTodoStatus() {
  yield takeLatest(A.TOGGLE_TODO_STATUS, toggleTodoStatus);
};

export const editTodo = function* editTodo() {
  const todos = yield select(Selectors.selectAllTodos);
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const watchEditTodo = function* watchEditTodo() {
  yield takeLatest(A.EDIT_TODO, editTodo);
};

export default function* rootSaga() {
  return yield all([
    watchAddTodo(),
    watchRemoveStoredTodo(),
    watchToggleTodoStatus(),
    watchEditTodo()
  ]);
}
