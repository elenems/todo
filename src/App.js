import React from "react";
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/rootSaga";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

const useStyles = makeStyles({
  root: {
    marginTop: "40px"
  }
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Container classes={{ root: classes.root }} fixed maxWidth="sm">
        <div className="App">
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </div>
      </Container>
    </Provider>
  );
}

export default App;
