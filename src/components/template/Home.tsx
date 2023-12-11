import React from "react";
import DateTime from "../organisms/Home/DateTime";
import Punch from "../organisms/Home/Punch";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box >
      <DateTime />
      <Punch />
    </Box>
  );
};

export default Home;
