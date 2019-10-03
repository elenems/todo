import todoReducer from "./todoReducer";
import * as Actions from "../actions/todoActions";
import * as Types from "../actions/actionTypes";
// localStorage.setItem(
//   "todos",
//   JSON.stringify([{ id: 1, title: "Title", isChecked: false }])
// );
const initState = {
  todos: [],
  error: "",
  message: ""
};
describe("todoReducer", () => {
  it("should handle ADD_TODO", () => {
    const state = Object.assign(initState, {});
    expect(
      todoReducer(state, {
        type: Types.ADD_TODO,
        payload: { title: "Title", id: 1 }
      })
    ).toEqual({
      ...state,
      todos: [{ id: 1, title: "Title", isChecked: false }]
    });
  });

  it("should handle REMOVE_TODO", () => {
    const state = Object.assign(initState, {
      todos: [{ id: 1, title: "Title", isChecked: false }]
    });
    expect(
      todoReducer(state, {
        type: Types.REMOVE_TODO,
        payload: 1
      })
    ).toEqual({
      ...state,
      todos: []
    });
  });

  it("Should handle TOGGLE_TODO_STATUS", () => {
    const state = Object.assign(initState, {
      todos: [{ id: 1, title: "Title", isChecked: false }]
    });
    expect(
      todoReducer(state, {
        type: Types.TOGGLE_TODO_STATUS,
        payload: 1
      })
    ).toEqual({
      ...state,
      todos: [{ id: 1, title: "Title", isChecked: true }]
    });
  });

  it("Should handle SET_ERROR", () => {
    const state = Object.assign(initState, {});
    expect(
      todoReducer(state, {
        type: Types.SET_ERROR,
        payload: "Error"
      })
    ).toEqual({
      ...state,
      error: "Error"
    });
  });

  it("Should handle EDIT_TODO", () => {
    const state = Object.assign(initState, {
      todos: [{ id: 1, title: "Title", isChecked: false }]
    });
    expect(
      todoReducer(state, {
        type: Types.EDIT_TODO,
        payload: { id: 1, title: "New title" }
      })
    ).toEqual({
      ...state,
      todos: [{ id: 1, title: "New title", isChecked: false }]
    });
  });

  it("Should handle SET_MESSAGE", () => {
    const state = Object.assign(initState, {});
    expect(
      todoReducer(state, {
        type: Types.SET_MESSAGE,
        payload: "New message"
      })
    ).toEqual({
      ...state,
      message: "New message"
    });
  });
});
