import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useSpring, animated } from "react-spring";
import { MdWarning } from "react-icons/md";
export default function AlertCard(props) {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={spring}>
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
    >
      <Typography variant="h6" component="p">
        {props.error}
      </Typography>
      <div style={{ fontSize: "48px", lineHeight: "0em" }}>
        <MdWarning color="#f50057" />
      </div>
    </Box>
    </animated.div>
  );
}
