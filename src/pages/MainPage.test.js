import MainPage from "./MainPage";
import { shallow } from "enzyme";
import React from "react";
import TodoHeaderControls from "../components/TodoHeaderControls";
import TodoList from "../components/TodoList";

describe("MainPage", () => {
  it("Matches snapshot", () => {
    const wrapper = shallow(<MainPage />).debug();
    expect(wrapper).toMatchSnapshot();
  });

  it("Contains Todo list and controls", () => {
    const wrapper = shallow(<MainPage />);
    expect(
      wrapper.contains(
        <div>
          <TodoHeaderControls />
          <TodoList />
        </div>
      )
    ).toEqual(true);
  });
});
