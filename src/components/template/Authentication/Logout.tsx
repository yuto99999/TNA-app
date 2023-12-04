import { Box , Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Logout = () => {

  const navigate = useNavigate();

  // ログアウトの処理を追記
  const doLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        alert("ログアウト完了！");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // ログアウトボタンを追加
  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          doLogout();
        }}
      >
        ログアウト
      </Button>
    </Box>
  );
};

export default Logout;
