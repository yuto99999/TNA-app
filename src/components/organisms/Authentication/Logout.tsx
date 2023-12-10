import { Box, Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const doLogout = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        alert("ログアウトしました");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Button
      variant="text"
      fullWidth
      onClick={() => {
        doLogout();
      }}
      sx={{
        color: "#000000",
        fontSize: "1.3rem",
        fontFamily: "游ゴシック",
        fontWeight: 600,
      }}
    >
      ログアウト
    </Button>
  );
};

export default Logout;
