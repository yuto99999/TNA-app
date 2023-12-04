import * as React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // ユーザーがログインボタンを押したときにdoLogin関数が実行される
  const doLogin = () => {
    const auth = getAuth();

    // Firebaseで用意されているメールアドレスとパスワードでログインするための関数
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // ログインができたかどうかをわかりやすくするためのアラート
        alert("ログインOK!");
        console.log(user);
        navigate("/Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeRegister = () => {
    navigate("/Register");
  };

  return (
    <Box width={"100%"} textAlign={"center"} marginTop="10rem">
      <Typography>ログイン</Typography>
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
        sx={{ marginRight: "1rem" }}
        variant="contained"
        onClick={() => {
          doLogin();
        }}
      >
        ログイン
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          changeRegister();
        }}
      >
        新規登録
      </Button>
    </Box>
  );
}
