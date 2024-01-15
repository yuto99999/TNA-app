import * as React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const doLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess(true);
        setError(false);
        console.log(user);
        setOpen(true);
        setTimeout(() => {
          navigate("/Home");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setOpen(true);
      });
  };

  const changeRegister = () => {
    navigate("/Register");
  };

  const vertical = "top";
  const horizontal = "right";

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box width="100%" height="100vh" bgcolor="#F5F4EE">
      <Box display="flex" flexDirection="column" alignItems="center" pt="7rem">
        <Typography
          fontSize="3.5rem"
          fontFamily="游ゴシック"
          fontWeight="bold"
          color="#2864F0"
          mb={6}
        >
          出退勤管理 TNA-APP
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
        <Button
          variant="contained"
          onClick={() => {
            changeRegister();
          }}
          sx={{
            width: "25%",
            bgcolor: "#2864F0",
            fontSize: "1.3rem",
            fontFamily: "游ゴシック",
            fontWeight: 600,
            borderRadius: "5rem",
          }}
        >
          新規登録はこちらから
        </Button>
        {success && (
          <Snackbar
            open={open}
            autoHideDuration={6000}
            anchorOrigin={{ vertical, horizontal }}
          >
            <Alert severity="success" sx={{ width: "100%" }}>
              ログインしました！
            </Alert>
          </Snackbar>
        )}
        {error && (
          <Snackbar
            open={open}
            onClose={handleClose}
            autoHideDuration={6000}
            anchorOrigin={{ vertical, horizontal }}
          >
            <Alert
              severity="error"
              onClose={handleClose}
              sx={{ width: "100%" }}
            >
              ログインに失敗しました
            </Alert>
          </Snackbar>
        )}
      </Box>
    </Box>
  );
};

export default Login;
