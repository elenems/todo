import React, { Component } from "react";
import TodoInput from "./TodoInput";
import AddTodoButton from "./AddTodoButton";
import { connect } from "react-redux";
import { addTodo } from "../../store/actions/todoActions";
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
    // this.setState({
    //   title: ""
    // });
  };

  render() {
    const { title } = this.state;
    return (
      <div className="controls">
        <TodoInput value={title} handleChange={this.changeTitle} />
        <AddTodoButton handleClick={this.addTodo} />
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
