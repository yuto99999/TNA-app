import { Box, Button, Typography } from "@mui/material";

const FirstCol = () => {
  return (
    <>
      <Box width="15rem" height="5rem"></Box>
      <Box sx={{ ...styledBox }}>
        <Typography sx={{ ...styledFont }}>勤怠</Typography>
      </Box>
      <Box sx={{ ...styledBox }}>
        <Typography sx={{ ...styledFont }}>給与</Typography>
      </Box>
    </>
  );
};

const styledBox = {
  width: "15rem",
  height: "5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "1.5rem",
  bgcolor: "#F5F4EE",
};

const styledFont = {
  color: "#000000",
  fontSize: "1.6rem",
  fontFamily: "游ゴシック",
  fontWeight: 600,
};

export default FirstCol;
