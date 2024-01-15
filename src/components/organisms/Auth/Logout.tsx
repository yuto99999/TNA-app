import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Box, Button, Modal, Typography } from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -80%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  marginTop: "3rem",
};

const Logout = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openT, setOpenT] = useState(false);

  const navigate = useNavigate();

  const doLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setSuccess(true);
        setError(false);
        setOpenT(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setOpenT(true);
      });
  };

  const vertical = "top";
  const horizontal = "right";

  const handleCloseT = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="text"
        fullWidth
        sx={{
          color: "#000000",
          fontSize: "1.3rem",
          fontFamily: "游ゴシック",
          fontWeight: 600,
        }}
      >
        ログアウト
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            p={2}
            fontSize="1.5rem"
            fontFamily="游ゴシック"
            fontWeight={600}
          >
            ログアウトしますか？
          </Typography>
          <Button
            variant="contained"
            onClick={() => {
              doLogout();
            }}
            sx={{
              mr: 5,
              bgcolor: "#2864F0",
              fontSize: "1.3rem",
              fontFamily: "游ゴシック",
              fontWeight: 600,
              borderRadius: "5rem",
              p: ".3rem 3rem",
            }}
          >
            はい
          </Button>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{
              bgcolor: "#2864F0",
              fontSize: "1.3rem",
              fontFamily: "游ゴシック",
              fontWeight: 600,
              borderRadius: "5rem",
              p: ".3rem 3rem",
            }}
          >
            いいえ
          </Button>
          {success && (
            <Snackbar
              open={openT}
              autoHideDuration={6000}
              anchorOrigin={{ vertical, horizontal }}
            >
              <Alert severity="success" sx={{ width: "100%" }}>
                ログアウトしました！
              </Alert>
            </Snackbar>
          )}
          {error && (
            <Snackbar
              open={openT}
              onClose={handleCloseT}
              autoHideDuration={6000}
              anchorOrigin={{ vertical, horizontal }}
            >
              <Alert
                severity="error"
                onClose={handleCloseT}
                sx={{ width: "100%" }}
              >
                ログアウトに失敗しました
              </Alert>
            </Snackbar>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Logout;
