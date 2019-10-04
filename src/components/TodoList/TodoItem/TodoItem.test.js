import { shallow } from "enzyme";
import React from "react";
import TodoItem from "../TodoItem";
import { TodoItemTest } from "./TodoItem.jsx";

describe("TodoItem", () => {
  let props;
  beforeAll(() => {
    const todo = { id: 1, title: "Title", isChecked: false };
    props = {
      toggleTodoStatus() {},
      removeTodo() {},
      todo,
      history: {
        push() {}
      }
    };
  });
  it("Matches snapshot", () => {
    const wrapper = shallow(<TodoItemTest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Can click moveToEditTodo", () => {
    const wrapper = shallow(<TodoItemTest {...props} />);
    wrapper.find("#editTodoRedirectButton").simulate("click");
    expect(wrapper.find("#editTodoRedirectButton").length).toBe(1);
  });

  it("Can click removeTodoButton", () => {
    const wrapper = shallow(<TodoItemTest {...props} />);
    const elem = document.createElement("div");
    wrapper.find("#removeTodoButton").simulate("click", {
      target: {
        closest() {
          return elem;
        }
      }
    });
    expect(wrapper.find("#removeTodoButton").length).toBe(1);
  });

  it("Can click todoStatusToggler", () => {
    const elem = document.createElement("p");
    const wrapper = shallow(<TodoItemTest {...props} />);
    wrapper.find("#todoStatusToggler").simulate("click", { target: elem });
    expect(wrapper.find("#todoStatusToggler").length).toBe(1);
  });

  it("Cals remove todo after delay", () => {
    jest.useFakeTimers();

    const wrapper = shallow(<TodoItemTest {...props} />);
    const elem = document.createElement("div");
    const mock = jest.fn();
    wrapper.find("#removeTodoButton").simulate("click", {
      target: {
        closest() {
          return elem;
        }
      }
    });
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  it("S", () => {
    const wrapper = shallow(<TodoItem />);
    console.log(wrapper.props())
  });
});
