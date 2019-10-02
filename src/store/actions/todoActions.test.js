import * as Actions from "./todoActions";
import * as Types from "./actionTypes";

describe("todoActions", () => {
  it("Equals ADD_TODO", () => {
    const expectedObject = { type: Types.ADD_TODO, payload: "title" };
    expect(Actions.addTodo("title")).toEqual(expectedObject);
  });

  it("Equals REMOVE_TODO", () => {
    const expectedObject = { type: Types.REMOVE_TODO, payload: 1 };
    expect(Actions.removeTodo(1)).toEqual(expectedObject);
  });

  it("Equals toggleTodoStatus", () => {
    const expectedObject = { type: Types.TOGGLE_TODO_STATUS, payload: 1 };
    expect(Actions.toggleTodoStatus(1)).toEqual(expectedObject);
  });

  it("Equals setError", () => {
    const expectedObject = { type: Types.SET_ERROR, payload: "Error message" };
    expect(Actions.setError("Error message")).toEqual(expectedObject);
  });

  it("Equals editTodo", () => {
    const expectedObject = {
      type: Types.EDIT_TODO,
      payload: { title: "New title", id: 1 }
    };
    expect(Actions.editTodo({ title: "New title", id: 1 })).toEqual(
      expectedObject
    );
  });

  it("Equals setMessage", () => {
    const expectedObject = { type: Types.SET_MESSAGE, payload: "Message" };
    expect(Actions.setMessage("Message")).toEqual(expectedObject);
  });
});
