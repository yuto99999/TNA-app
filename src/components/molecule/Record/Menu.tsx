import { Box } from "@mui/material";
import FirstCol from "../../atmos/Record/FirstCol";
import SecondCol from "../../atmos/Record/SecondCol";
import ThirdCol from "../../atmos/Record/ThirdCol";
import FinalCol from "../../atmos/Record/FinalCol";

const Menu = () => {
  return (
    <Box width="80%" height="100vh" sx={{ float: "right" }}>
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
