import React from "react";
import TodoList from "./components/TodoList";
import TodoHeaderControls from './components/TodoHeaderControls';
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/rootSaga"
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoHeaderControls />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
