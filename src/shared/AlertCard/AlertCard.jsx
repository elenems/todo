import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { MdWarning } from "react-icons/md";
export default function AlertCard(props) {

  return (
    <Box
      style={{
        padding: "20px 16px",
        border: "1px solid",
        marginBottom: "12px"
      }}
      color="#f50057"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      className='reveal card'
    >
      <Typography variant="h6" component="p">
        {props.error}
      </Typography>
      <div style={{ fontSize: "48px", lineHeight: "0em" }}>
        <MdWarning color="#f50057" />
      </div>
    </Box>
  );
}
