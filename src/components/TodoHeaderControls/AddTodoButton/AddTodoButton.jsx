import React from "react";
import Button from "@material-ui/core/Button";
export default function AddTodoButton({ handleClick }) {
  return (
    <div>
      <Button variant="contained" onClick={handleClick} color="primary">
        Add
      </Button>
    </div>
  );
}
