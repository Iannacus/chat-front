import React from "react";
import ChatLayout from "../layout/ChatLayout";
import { Box } from "@mui/material";

function Chat() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "15%",
          background: (theme) => theme.palette.primary.light,
        }}
      />
      <Box
        sx={{
          height: "85%",
          background: (theme) => theme.palette.grey[300],
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "90%",
          height: "90%",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          margin: "auto",
          borderRadius: "7px",
          overflow: "hidden",
        }}
      >
        <ChatLayout />
      </Box>
    </Box>
  );
}

export default Chat;
