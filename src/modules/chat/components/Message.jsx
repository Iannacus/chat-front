import { Typography } from "@mui/material";
import React from "react";

function Message({ message }) {
  return (
    <Box>
      <Typography variant="body1">{message}</Typography>
    </Box>
  );
}

export default Message;
