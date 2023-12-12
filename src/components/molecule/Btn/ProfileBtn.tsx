import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileBtn = () => {
  const navigate = useNavigate();
  const doEditProfile = () => {
    navigate("/Profile");
  };

  return (
    <Button
      variant="text"
      fullWidth
      onClick={() => {
        doEditProfile();
      }}
      sx={{
        color: "#000000",
        fontSize: "1.3rem",
        fontFamily: "游ゴシック",
        fontWeight: 600,
      }}
    >
      プロフィール編集
    </Button>
  );
};

export default ProfileBtn;
