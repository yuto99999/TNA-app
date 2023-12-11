import React from "react";
import { Box } from "@mui/material";
import InModal from "../../molecule/Home/InModal";
import OutModal from "../../molecule/Home/OutModal";

const Punch = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop="3rem">
      <InModal />
      <OutModal />
    </Box>
  );
};

export default Punch;
