import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { MdRemoveCircleOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Box from "@material-ui/core/Box";
import {connect} from 'react-redux';
import * as Actions from '../../../store/actions/todoActions';

const useStyles = makeStyles({
  root: {
    margin: "10px 0px 10px 0px",
    padding: "12px",
    fontSize: "26px",
    border: "none"
  }
});

function TodoItem(props) {
  const todo = props.todo;
  const classes = useStyles();

  const editTodo = () => {
  };

  const removeTodo = () => {
    const id = todo.id
    props.removeTodo(id)
  }

  return (
    <Box display="flex" justifyContent="space-between">
      <h4>{todo.title}</h4>
      <Box>
        <IconButton
          onClick={editTodo}
          color="primary"
          aria-label="edit"
          classes={{ root: classes.root }}
        >
          <MdEdit />
        </IconButton>
        <IconButton
          onClick = {removeTodo}
          color="secondary"
          aria-label="delete"
          classes={{ root: classes.root }}
        >
          <MdRemoveCircleOutline />
        </IconButton>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
       removeTodo: (id) => dispatch(Actions.removeTodo(id))
    }
}

export default connect(null, mapDispatchToProps)(TodoItem)