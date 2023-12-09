import React from "react";
import { Box, Button } from "@mui/material";
import InModal from "../../molecule/Home/InModal";
import OutModal from "../../molecule/Home/OutModal";
import LeaveButton from "../../molecule/Btn/LeaveBtn";

const Punch = () => {
  return (
    <Box display="flex" justifyContent="center" marginTop="3rem">
      <InModal />
      <LeaveButton />
    </Box>
  );
};

export default Punch;
