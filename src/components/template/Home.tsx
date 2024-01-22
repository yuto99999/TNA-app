import DateTime from "../organisms/Home/DateTime";
import Punch from "../organisms/Home/Punch";
import { Box } from "@mui/material";
import DisplayAvater from "../organisms/Home/DisplayAvater";

const Home = () => {
  return (
    <Box sx={{ overflowY: "scroll", height: "100vh" }}>
      <DateTime />
      <Punch />
      {/* <DisplayAvater /> */}
    </Box>
  );
};

export default Home;
