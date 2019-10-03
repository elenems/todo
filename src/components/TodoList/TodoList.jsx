import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <Box style={{ marginTop: "20px" }}>
        {todos.length ? (
          todos.map(todo => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <Typography component="span" variant="h6" gutterBottom>
            Add your first todo
          </Typography>
        )}
      </Box>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  };
};

export const TodoListTest = TodoList;

export default connect(mapStateToProps)(TodoList);
