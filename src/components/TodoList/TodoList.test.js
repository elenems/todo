import React from "react";
import { shallow } from "enzyme";
import TodoList from "../TodoList";
import {TodoListTest} from './TodoList.jsx';
import configureMockStore from "redux-mock-store";
import TodoItem from './TodoItem';
describe("TodoList", () => {
  const mockStore = configureMockStore();
  const initialState = {
    todo: {
      todos: [],
      error: "",
      message: ""
    }
  };
  it("Matches snapshot", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<TodoList store={store} />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders TodoItem if passed array has content", () => {
    const todos = [{ id: 1, title: "Todo title" }, {id:2, title:"Some title 2"}];
    const wrapper = shallow(<TodoListTest todos={todos} />);
    expect(wrapper.find(TodoItem).length).toBeGreaterThan(0);
  });
});
