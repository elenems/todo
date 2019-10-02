import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import * as Actions from "../../../store/actions/todoActions";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    margin: "0px 0px 10px 0px",
    padding: "12px",
    fontSize: "26px",
    border: "none"
  }
});

function TodoItem(props) {
  const todo = props.todo;
  const classes = useStyles();

  const moveToEditTodo = () => {
    const todoID = props.todo.id;
    props.history.push(`/edit/${todoID}`);
  };

  const removeTodo = e => {
    const id = todo.id;
    const element = e.target.closest(".todo-item");
    element.className += ' hide';
    setTimeout(() => {
      props.removeTodo(id);
    }, 400);
  };

  const toggleTodoStatus = e => {
    props.toggleTodoStatus(props.todo.id);
    const element = e.target;
    const textDecoration =
      element.style.textDecoration === "line-through" ? "none" : "line-through";
    element.style.textDecoration = textDecoration;
  };

  const textStyle = props.todo.isChecked
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  return (
    <Box
      className="todo-item reveal"
      display="flex"
      alignItems="baseline"
      justifyContent="space-between"
    >
      <Typography
        style={textStyle}
        onClick={toggleTodoStatus}
        component="p"
        variant="h5"
      >
        {todo.title}
      </Typography>
      <Box>
        <Tooltip title="Edit">
          <IconButton
            onClick={moveToEditTodo}
            color="primary"
            aria-label="edit"
            classes={{ root: classes.root }}
          >
            <MdEdit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            onClick={removeTodo}
            color="secondary"
            aria-label="delete"
            classes={{ root: classes.root }}
          >
            <MdRemoveCircleOutline />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(Actions.removeTodo(id)),
    toggleTodoStatus: id => dispatch(Actions.toggleTodoStatus(id))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(TodoItem)
);
