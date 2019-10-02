import EditTodoPage from "./EditTodoPage";
import { shallow } from "enzyme";
import React from "react";
import EditTodo from '../components/EditTodo';

describe("EditTodoPage", () => {
  it("Matches snapshot", () => {
    const wrapper = shallow(<EditTodoPage />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Contains EditTodo component", ()=>{
    const wrapper = shallow(<EditTodoPage />);
    expect(wrapper.exists(EditTodo)).toBe(true)
  })
});
