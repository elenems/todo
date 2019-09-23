import React from "react";
import TextField from "@material-ui/core/TextField";
function TodoInput({handleChange, value}) {

  return (
    <TextField
      value={value}
      onChange={handleChange}
      id="title"
      label="Title"
      margin="normal"
    />
  );
}



export default TodoInput;
