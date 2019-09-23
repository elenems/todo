import {all, takeLatest, put} from "redux-saga/effects";

function* addTodo(){
 yield put('ADD_TODO')
}

function* watchAddTodo(){
  yield takeLatest('ADD_TODO', addTodo)
}

export default function* rootSaga(){
  return yield all([watchAddTodo()])
}