import { Box, Typography, Button, Popover } from "@mui/material";
import FirstCol from "../../atmos/FirstCol";
import SecondCol from "../../atmos/SecondCol";
import ThirdCol from "../../atmos/ThirdCol";
import FinalCol from "../../atmos/FinalCol";

const Menu = () => {
  return (
    <Box
      width="80%"
      height="100vh"
      sx={{ float: "right" }}
    >
      <Box display="flex" justifyContent="space-evenly" mt={10}>
        <FirstCol />
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt={3}>
        <SecondCol />
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt={3}>
        <ThirdCol />
      </Box>
      <Box display="flex" justifyContent="space-evenly" mt={3}>
        <FinalCol />
      </Box>
    </Box>
  );
};

export default Menu;
