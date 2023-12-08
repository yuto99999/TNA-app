import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const HomeBtn = () => {
  const navigate = useNavigate();
  const doBackHome = () => {
    navigate("/Home");
  };

  return (
    <Button
      variant="contained"
      onClick={() => {
        doBackHome();
      }}
    >
      Home
    </Button>
  );
};

export default HomeBtn;
