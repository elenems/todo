import { all, takeLatest, put, select } from "redux-saga/effects";
import * as A from "./actions/actionTypes";
import * as Selectors from "./selectors";
function* storeTodo() {
  const lastTodo = yield select(Selectors.selectLastTodo);
  const todos =
     localStorage.getItem("todos") === null
      ? [lastTodo]
      : [lastTodo, ...JSON.parse(localStorage.getItem("todos"))];
     localStorage.setItem("todos", JSON.stringify(todos));
}

function* watchAddTodo() {
  yield takeLatest(A.ADD_TODO, storeTodo);
}

function* removeStoredTodo(){
  const todos = yield select(Selectors.selectAllTodos);
  localStorage.setItem("todos", JSON.stringify(todos))
}

function* watchRemoveStoredTodo(){
  yield takeLatest(A.REMOVE_TODO, removeStoredTodo)
}

export default function* rootSaga() {
  return yield all([watchAddTodo(), watchRemoveStoredTodo()]);
}
