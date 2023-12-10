import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const HomeBtn = () => {
  const navigate = useNavigate();
  const doBackHome = () => {
    navigate("/Home");
  };

  return (
    <Button
      variant="text"
      fullWidth
      onClick={() => {
        doBackHome();
      }}
      sx={{
        color: "#000000",
        fontSize: "1.3rem",
        fontFamily: "游ゴシック",
        fontWeight: 600,
      }}
    >
      Home
    </Button>
  );
};

export default HomeBtn;
