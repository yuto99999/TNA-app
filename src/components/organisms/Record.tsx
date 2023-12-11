import { Box } from "@mui/material";
import HomeBtn from "../molecule/Btn/HomeBtn";
import OfficeWorker from "../molecule/Record/OfficeWorker";

const Record = () => {
  return (
    <Box width="80%" height="100vh" sx={{ float: "right", overflowY: "scroll" }}>
      <OfficeWorker />
    </Box>
  );
};

export default Record;
