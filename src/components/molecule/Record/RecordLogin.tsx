import * as React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

const RecordLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const doLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess(true);
        setError(false);
        console.log(user);
        setTimeout(() => {
          navigate("/Menu");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  return (
    <Box width="80%" height="100vh" sx={{float:"right"}}>
      <Box display="flex" flexDirection="column" alignItems="center" pt="7rem">
        <Typography
          fontSize="3.5rem"
          fontFamily="游ゴシック"
          fontWeight="bold"
          color="#2864F0"
          mb={6}
        >
          管理画面ログイン
        </Typography>
        <TextField
          required
          id="email"
          label="メールアドレス"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "25%", m: 1.5 }}
        />
        <TextField
          required
          id="password"
          label="パスワード"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: "25%", m: 1 }}
        />
        <Button
          variant="contained"
          onClick={() => {
            doLogin();
          }}
          sx={{
            width: "25%",
            mt: 6,
            mb: 2,
            bgcolor: "#2864F0",
            fontSize: "1.3rem",
            fontFamily: "游ゴシック",
            fontWeight: 600,
            borderRadius: "5rem",
          }}
        >
          ログイン
        </Button>
        {success && (
          <Alert
            severity="success"
            sx={{
              width: "25%",
              mt: 5,
              fontSize: "1.2rem",
              fontFamily: "游ゴシック",
              fontWeight: 600,
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            ログインしました
          </Alert>
        )}
        {error && (
          <Alert
            severity="error"
            sx={{
              width: "25%",
              mt: 5,
              fontSize: "1.2rem",
              fontFamily: "游ゴシック",
              fontWeight: 600,
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            ログインできませんでした
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default RecordLogin;
