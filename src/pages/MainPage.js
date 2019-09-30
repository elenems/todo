import React from "react";
import TodoList from "../components/TodoList";
import TodoHeaderControls from "../components/TodoHeaderControls";

export default function MainPage() {
  return (
    <div>
      <TodoHeaderControls />
      <TodoList />
    </div>
  );
}
