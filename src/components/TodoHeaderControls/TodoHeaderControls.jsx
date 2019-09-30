import React, { Component } from "react";
import TodoInput from "./TodoInput";
import AddTodoButton from "./AddTodoButton";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
import Box from '@material-ui/core/Box';

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
    this.props.addTodo(this.state.title);
    this.setState({
      title: ""
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="controls">
        <Box display="flex" alignItems="baseline" justifyContent='space-between'>
          <TodoInput value={title} handleChange={this.changeTitle} />
          <AddTodoButton handleClick={this.addTodo} />
        </Box>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: title => dispatch(addTodo(title))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoHeaderControls);
