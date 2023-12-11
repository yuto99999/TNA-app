import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../..";
import useProfile from "../Hooks/useProfile";
import { Box, Button, Typography, Alert, Modal } from "@mui/material";

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

export default function OutModal() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const firestore = firebaseApp.firestore;

  const profileData = useProfile();
  const profile = profileData.profile;

  const handleAttendance = async (type: string) => {
    setError(false);

    try {
      const uid = profile?.uid;
      const name = profile?.name;
      const image = profile?.image;
      const docRef = collection(firestore, "Records");

      await addDoc(docRef, {
        type,
        createdAt: Timestamp.fromDate(new Date()),
        user: {
          uid,
          name,
          image,
        },
      });
      setSuccess(true);
      setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Box marginRight="3rem">
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          bgcolor: "#2864F0",
          fontSize: "1.7rem",
          fontFamily: "游ゴシック",
          fontWeight: 600,
          borderRadius: "5rem",
          p: "0.5rem 7rem",
        }}
      >
        退勤
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
            退勤しますか？
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleAttendance("退勤")}
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
              お疲れ様でした！
            </Alert>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
