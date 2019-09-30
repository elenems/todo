import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

export default function AddTodoButton({ handleClick }) {
  return (
    <div>
      <Tooltip title="add" placement="right">
        <Button variant="contained" onClick={handleClick} color="primary">
          Add
        </Button>
      </Tooltip>
    </div>
  );
}
