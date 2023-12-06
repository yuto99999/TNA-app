import React from "react";
import { Box } from "@mui/material";
import Logout from "../organisms/Authentication/Logout";
import ProfileBtn from "../molecule/ProfileBtn";
import TestBtn from "../atmos/TestBtn";

const Header = () => {
  return (
    <Box display="flex">
      <Logout />
      <ProfileBtn />
      <TestBtn />
    </Box>
  );
};

export default Header;
