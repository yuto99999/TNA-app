import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TestBtn = () => {
  const navigate = useNavigate();

  // ログアウトの処理を追記
  const doTest = () => {
    navigate("/Test");
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          doTest();
        }}
      >
        テストです
      </Button>
    </Box>
  );
};

export default TestBtn;
