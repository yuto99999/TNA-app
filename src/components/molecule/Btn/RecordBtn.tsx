import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const RecordBtn = () => {
  const navigate = useNavigate();
  const doRecord = () => {
    navigate("/RecordLogin");
  };

  return (
    <Button
      variant="text"
      fullWidth
      onClick={() => {
        doRecord();
      }}
      sx={{
        color: "#000000",
        fontSize: "1.3rem",
        fontFamily: "游ゴシック",
        fontWeight: 600,
      }}
    >
      出退勤管理
    </Button>
  );
};

export default RecordBtn;
