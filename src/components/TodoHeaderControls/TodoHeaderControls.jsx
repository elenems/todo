import React, { Component } from "react";
import TodoInput from "./TodoInput";
import AddTodoButton from "./AddTodoButton";
import { connect } from "react-redux";
import { addTodo, setError } from "../../store/actions/todoActions";
import Box from "@material-ui/core/Box";
import AlertCard from "../../shared/AlertCard";
class TodoHeaderControls extends Component {
  state = {
    title: ""
  };

  changeTitle = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  addTodo = () => {
    if (this.state.title.length > 0) {
      this.props.addTodo(this.state.title);
      this.setState({
        title: ""
      });
    } else {
      const elements = document.getElementsByClassName("card");
      this.props.setError("New TODO can't be empty!");
      setTimeout(() => {
        for (let elem of elements) {
          elem.className = elem.className.replace(/reveal/, "hide");
        }
        setTimeout(() => {
          this.props.setError("");
        }, 400);
      }, 2500);
      
    }
  };

  render() {
    const { title } = this.state;
    return (
      <div className="controls">
        {this.props.error ? <AlertCard error={this.props.error} /> : null}
        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
        >
          <TodoInput value={title} handleChange={this.changeTitle} />
          <AddTodoButton handleClick={this.addTodo} />
        </Box>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: title => dispatch(addTodo(title)),
    setError: errorMessage => dispatch(setError(errorMessage))
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    error: state.todo.error
  };
};

export const TodoHeaderControlsTest = TodoHeaderControls;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHeaderControls);
