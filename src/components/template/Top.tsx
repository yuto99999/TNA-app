import React from "react";
import DateTime from "../organisms/Home/DateTime";
import Punch from "../organisms/Home/Punch";
import Header from "./Sidebar";
import { Box } from "@mui/material";

const Top = () => {
  return (
    <Box >
      <DateTime />
      <Punch />
    </Box>
  );
};

export default Top;
