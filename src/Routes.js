import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditTodoPage from "./pages/EditTodoPage";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/edit/:id" component={EditTodoPage} />
    </Switch>
  );
}
