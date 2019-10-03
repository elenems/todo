import * as Selectors from "./selectors";
const state = {
  todo: {
    todos: [{ id: 0, title: "Title" }, { id: 1, title: "Some title" }]
  }
};
describe("Selectors", () => {
  it("Select last todo", () => {
    expect(Selectors.selectLastTodo(state)).toEqual({ id: 0, title: "Title" });
  });

  it("Select all todos", () => {
    expect(Selectors.selectAllTodos(state)).toEqual([
      { id: 0, title: "Title" },
      { id: 1, title: "Some title" }
    ]);
  });
});
