import { TodoHeaderControlsTest } from "./TodoHeaderControls.jsx";
import { shallow, mount } from "enzyme";
import TodoHeaderControls from "../TodoHeaderControls";
import React from "react";

describe("TodoHeaderControls", () => {
  it("Matches snapshot", () => {
    const wrapper = shallow(<TodoHeaderControlsTest />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Calls changeTitle", () => {
    const wrapper = shallow(<TodoHeaderControlsTest />);
    const mock = jest.spyOn(wrapper.instance(), "changeTitle");
    const event = {
      target: {
        id: 1,
        value: "New title"
      }
    };
    wrapper.instance().changeTitle(event);
    expect(mock).toHaveBeenCalled();
  });

  it("Set state new title", () => {
    const wrapper = shallow(<TodoHeaderControlsTest />);
    wrapper.setState({ title: "New title" });
    expect(wrapper.state("title")).toBe("New title");
  });

  it("Calls setError inside addTodo", () => {
    jest.useFakeTimers();
    const mock = jest.fn();
    const props = {
      setError: title => {
        mock();
      }
    };
    const wrapper = shallow(<TodoHeaderControlsTest {...props} />);
    wrapper.setState({ title: "" });
    wrapper.instance().addTodo();
    expect(mock).toHaveBeenCalled();
    jest.runAllTimers();
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledTimes(2);
  });

  it("Calls addTodo inside addTodo", () => {
    const mock = jest.fn();
    const props = {
      addTodo: () => {
        mock();
      }
    };
    const wrapper = shallow(<TodoHeaderControlsTest {...props} />);
    wrapper.setState({ title: "Some title" });
    wrapper.instance().addTodo();
    expect(mock).toHaveBeenCalled();
    expect(wrapper.state("title")).toBe("");
  });
});
