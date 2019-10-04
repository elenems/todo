import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MdDone } from "react-icons/md";
export default function SuccessCard(props) {
  return (
    <Box
      style={{
        padding: "20px 16px",
        border: "1px solid",
        marginBottom: "12px"
      }}
      color="#4caf50"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className="reveal card"
    >
      <Typography variant="h6" component="p">
        {props.message}
      </Typography>
      <div style={{ fontSize: "48px", lineHeight: "0em" }}>
        <MdDone color="#4caf50" />
      </div>
    </Box>
  );
}
