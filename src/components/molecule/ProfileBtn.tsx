import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfileBtn = () => {
  const navigate = useNavigate();

  // ログアウトの処理を追記
  const doEditProfile = () => {
    navigate("/Profile")
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          doEditProfile();
        }}
      >
        プロフィール編集
      </Button>
    </Box>
  );
};

export default ProfileBtn;
