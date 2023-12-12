import { Box } from "@mui/material";
import InputNote from "../../atmos/Record/InputNote";
import DisplayNote from "../../atmos/Record/DisplayNote";

const Note = () => {
  return <Box width="50%" bgcolor="#F8F8F8">
    <DisplayNote />
    <InputNote />
  </Box>;
};

export default Note;
