import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import EditTodoPage from "./pages/EditTodoPage";
import { useTransition, animated } from "react-spring";
import useRouter from './useRouter'
const { location } = useRouter();
const transitions = useTransition(location, location => location.pathname, {
  from: { transform: "translate3d(0,-40px,0)" },
  enter: { transform: "translate3d(0,0px,0)" },
  leave: { transform: "translate3d(0,-40px,0)" }
});
export default function Routes() {
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={item}>
        <Route path="/" exact component={MainPage} />
        <Route path="/edit/:id" component={EditTodoPage} />
      </Switch>
    </animated.div>
  ));
}
