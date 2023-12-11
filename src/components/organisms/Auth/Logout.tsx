import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Box, Button, Modal, Typography, Alert } from "@mui/material";

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

  const navigate = useNavigate();

  const doLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setSuccess(true);
        setError(false);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
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
            <Alert
              severity="success"
              sx={{
                mt: 2,
                fontSize: "1.2rem",
                fontFamily: "游ゴシック",
                fontWeight: 600,
                alignItems: "center",
                borderRadius: 3,
              }}
            >
              ログアウトしました
            </Alert>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Logout;
