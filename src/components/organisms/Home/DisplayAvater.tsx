import { Box } from "@mui/material";
import OfficeAvater from "../../molecule/Home/DisplayAvater/OfficeAvater";
import RemoteAvater from "../../molecule/Home/DisplayAvater/RemoteAvater";
import LeaveAvater from "../../molecule/Home/DisplayAvater/LeaveAvater";

const DisplayAvater = () => {
  return (
    <Box mt={12} mb={12} display="flex" justifyContent="space-evenly">
      <OfficeAvater />
      <RemoteAvater />
      <LeaveAvater />
    </Box>
  );
};

export default DisplayAvater;
