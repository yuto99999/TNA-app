import React from "react";
import { Box, Button } from "@mui/material";
import InModal from "../molecule/InModal";
import OutModal from "../molecule/OutModal";

const Punch = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop="3rem">
      <InModal />
      <OutModal />
    </Box>
  );
};

export default Punch;
