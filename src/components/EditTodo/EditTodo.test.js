import { EditTodoTest } from "./EditTodo.jsx";
import EditTodo from "../EditTodo";
import { shallow } from "enzyme";
import React from "react";

describe("Edit todo", () => {
  const props = {
    todos: [{ title: "Title", id: 1, isChecked: false }],
    match: {
      params: {
        id: 1
      }
    },
    setMessage() {},
    setError() {},
    editTodo() {}
  };
  it("Matches snapshot", () => {
    const wrapper = shallow(<EditTodoTest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Calls editTodo", () => {
    const wrapper = shallow(<EditTodoTest {...props} />);
    console.log(wrapper.instance());
    // const mock = jest.spyOn(wrapper.instance(), "editTodo");
    // wrapper.instance().editTodo();
    // expect(mock).toHaveBeenCalled();
  });
});
