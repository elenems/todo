import { TodoHeaderControlsTest } from "./TodoHeaderControls.jsx";
import { shallow, mount } from "enzyme";
import TodoHeaderControls from "../TodoHeaderControls";
import AlertCard from "../../shared/AlertCard";
import React from "react";
import configureMockStore from "redux-mock-store";

describe("TodoHeaderControls", () => {
  const mockStore = configureMockStore();
  const initialState = {
    todo: {
      todos: [],
      error: "",
      message: ""
    }
  };

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

  it("Dispatches addTodo", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<TodoHeaderControls store={store} />).dive();
    expect(wrapper.props().addTodo()).toEqual({
      type: "ADD_TODO"
    });
  });

  it("Dispatches setError", () => {
    const store = mockStore(initialState);
    const wrapper = shallow(<TodoHeaderControls store={store} />).dive();
    expect(wrapper.props().setError()).toEqual({
      type: "SET_ERROR"
    });
  });

  it("Invokes addTodo", () => {
    const wrapper = shallow(<TodoHeaderControlsTest addTodo={title => {}} />);
    wrapper.setState({ title: "Some title" });
    const mock = jest.spyOn(wrapper.instance(), "addTodo");
    wrapper.instance().addTodo();
    expect(mock).toHaveBeenCalled();
  });

  it("Renders card on error", () => {
    const wrapper = shallow(<TodoHeaderControlsTest error="Error text" />);
    expect(wrapper.exists(AlertCard)).toBe(true);
  });
});
