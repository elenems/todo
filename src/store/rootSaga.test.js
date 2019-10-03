import * as Sagas from "./rootSaga";

describe("Sagas", () => {
  let initialState;
  beforeEach(() => {
    localStorage.removeItem("todos");
    initialState = {
      todo: {
        todos: [
          { id: "1", title: "title", isChecked: false },
          { id: "2", title: "second title", isChecked: false }
        ],
        error: "",
        message: ""
      }
    };
  });

  it("Store todo if storage is empty", () => {
    const gen = Sagas.storeTodo();
    gen.next();
    gen.next({ id: 1, title: "Title" });
    expect(JSON.parse(localStorage.getItem("todos"))).toEqual([
      { id: 1, title: "Title" }
    ]);
  });

  it("Asserts new todo at start", () => {
    const gen = Sagas.storeTodo();
    const firstTodo = { id: 1, title: "Title" };
    const secondTodo = { id: 2, title: "Title 2" };
    localStorage.setItem("todos", JSON.stringify([firstTodo]));
    gen.next();
    gen.next(secondTodo);
    expect(JSON.parse(localStorage.getItem("todos"))).toEqual([
      secondTodo,
      firstTodo
    ]);
  });

  it("Removes todos", () => {
    localStorage.setItem("todos", JSON.stringify(initialState.todo.todos));
    const gen = Sagas.removeStoredTodo();
    gen.next();
    gen.next([{ id: "2", title: "second title" }]);
    expect(localStorage.getItem("todos")).toEqual(
      JSON.stringify([{ id: "2", title: "second title" }])
    );
  });

  it("Toggles todo status", () => {
    localStorage.setItem("todos", JSON.stringify(initialState.todo.todos));
    const gen = Sagas.toggleTodoStatus();
    gen.next();
    gen.next([
      { id: "1", title: "title", isChecked: true },
      { id: "2", title: "second title", isChecked: true }
    ]);
    expect(localStorage.getItem("todos")).toEqual(
      JSON.stringify([
        { id: "1", title: "title", isChecked: true },
        { id: "2", title: "second title", isChecked: true }
      ])
    );
  });

  it("Edits todo ", () => {
    localStorage.setItem("todos", JSON.stringify(initialState.todo.todos));
    const gen = Sagas.editTodo();
    gen.next();
    gen.next([
      { id: "1", title: "Edited title", isChecked: false },
      { id: "2", title: "Edited second title", isChecked: false }
    ]);
    expect(localStorage.getItem("todos")).toEqual(
      JSON.stringify([
        { id: "1", title: "Edited title", isChecked: false },
        { id: "2", title: "Edited second title", isChecked: false }
      ])
    );
  });
});
