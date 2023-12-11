import React from "react";
import { Box } from "@mui/material";
import InputMessage from "../molecule/Chat/InputMessage";
import DisplayMessage from "../molecule/Chat/DisplayMessage";

const Chat = () => {
  return (
    <Box width="80%" sx={{ float: "right" }}>
      <DisplayMessage />
      <InputMessage />
    </Box>
  );
};

export default Chat;
