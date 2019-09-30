import React from "react";
import TodoList from "./components/TodoList";
import TodoHeaderControls from "./components/TodoHeaderControls";
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/rootSaga";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const useStyles = makeStyles({
  root:{
    marginTop:'40px'
  }
})
function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Container classes={{root:classes.root}} fixed maxWidth="sm">
        <div className="App">
          <TodoHeaderControls />
          <TodoList />
        </div>
      </Container>
    </Provider>
  );
}

export default App;
