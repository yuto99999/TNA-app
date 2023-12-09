import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecordBtn = () => {
  const navigate = useNavigate();
  const doRecord = () => {
    navigate("/Record");
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          doRecord();
        }}
      >
        管理画面
      </Button>
    </Box>
  );
};

export default RecordBtn;
