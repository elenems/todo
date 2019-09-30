import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: "200px",
    width: "100%",
    maxWidth: "400px",
    marginRight:'20px'
  }
});
function TodoInput({ handleChange, value }) {
  const classes = useStyles();

  return (
    <TextField
      classes={{ root: classes.root }}
      value={value}
      onChange={handleChange}
      id="title"
      label="Title"
      margin="normal"
    />
  );
}

export default TodoInput;
