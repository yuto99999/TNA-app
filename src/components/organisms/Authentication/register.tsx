import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const doRegister = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("登録完了！");
        console.log(user);
        navigate("/Profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box width={"100%"} textAlign={"center"} marginTop="10rem">
      <Typography>新規登録</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="メールアドレス"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="パスワード"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          doRegister();
        }}
      >
        登録
      </Button>
    </Box>
  );
}
