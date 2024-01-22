import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ThirdCol = () => {
  const navigate = useNavigate();
  const showAttendance = () => {
    navigate("/Record");
  };
  return (
    <>
      <Box sx={{ ...styledBox, bgcolor: "#F5F4EE" }}>
        <Typography sx={{ ...styledFont }}>今月のデータ</Typography>
      </Box>
      <Button
        sx={{ ...styledBtn }}
        onClick={() => {
          showAttendance();
        }}
      ></Button>
      <Button
        sx={{ ...styledBtn }}
        onClick={() => {
          showAttendance();
        }}
      ></Button>
    </>
  );
};

const styledBox = {
  width: "15rem",
  height: "8rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "1.5rem",
};

const styledFont = {
  color: "#000000",
  fontSize: "1.3rem",
  fontFamily: "游ゴシック",
  fontWeight: 600,
};

const styledBtn = {
  width: "15rem",
  height: "8rem",
  borderRadius: "1.5rem",
  border: "solid 1px #000000",
};

export default ThirdCol;
