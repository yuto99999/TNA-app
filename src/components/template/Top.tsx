import React from "react";
import DateTime from "../organisms/DateTime";
import Punch from "../organisms/Punch";
import Header from "./Header";
import { Box } from "@mui/material";

const Top = () => {
  return (
    <>
      <Header />
      <DateTime />
      <Punch />
    </>
  );
};

export default Top;
