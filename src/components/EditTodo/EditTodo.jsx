import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  setError,
  editTodo,
  setMessage
} from "../../store/actions/todoActions";
import AlertCard from "../../shared/AlertCard";
import { MdChevronLeft } from "react-icons/md";
import SuccessCard from "../../shared/SuccessCard";
import { element } from "prop-types";

const useStyles = makeStyles({
  root: {
    minWidth: "200px",
    width: "100%",
    maxWidth: "400px",
    marginRight: "20px",
    marginBottom: "0px"
  }
});

function EditTodo(props) {
  const classes = useStyles();

  const editTodo = () => {
    if (todoText.length) {
      props.editTodo({
        title: todoText,
        id: props.match.params.id
      });
      props.setMessage("Successfuly updated");
      const elements = document.getElementsByClassName("card");
      setTimeout(() => {
        setTimeout(() => {
          props.setMessage("");
        }, 400);

        for (let elem of elements) {
          elem.className = elem.className.replace(/reveal/, "hide");
        }
      }, 2500);
    } else {
      props.setError("Todo must have text");
    }
  };

  const receivedTodoText = props.todos.find(todo => {
    return todo.id == props.match.params.id;
  }).title;

  const [todoText, setTodoText] = useState(receivedTodoText);

  const editText = e => {
    setTodoText(e.target.value);
  };

  const moveHome = () => {
    props.history.push("/");
  };

  return (
    <div>
      {props.error ? <AlertCard error={props.error} /> : null}
      {props.message ? <SuccessCard message={props.message} /> : null}
      <Box
        style={{ marginBottom: "40px" }}
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <TextField
          classes={{ root: classes.root }}
          value={todoText}
          onChange={editText}
          id="title"
          label="Title"
          margin="normal"
        />

        <Tooltip title="edit" placement="right">
          <Button variant="contained" onClick={editTodo} color="primary">
            Edit
          </Button>
        </Tooltip>
      </Box>
      <Button onClick={moveHome} variant="contained" color="primary">
        <MdChevronLeft fontSize="36px" />
        Back
      </Button>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    editTodo: payload => dispatch(editTodo(payload)),
    setError: msg => dispatch(setError(msg)),
    setMessage: msg => dispatch(setMessage(msg))
  };
};

const mapStateToProps = state => {
  return {
    error: state.todo.error,
    todos: state.todo.todos,
    message: state.todo.message
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EditTodo)
);
