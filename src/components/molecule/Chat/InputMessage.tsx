import React from "react";
import { useState } from "react";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../..";
import useProfile from "../Hooks/useProfile";
import SendIcon from "@mui/icons-material/Send";

const InputMessage = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const profileData = useProfile();
  const profile = profileData.profile;

  const handleClick = async () => {
    setError(false);
    const firestore = firebaseApp.firestore;
    if (message === "") {
      setError(true);
      return;
    }

    try {
      const docRef = collection(firestore, "Messages");
      await addDoc(docRef, {
        text: message,
        createdAt: Timestamp.fromDate(new Date()),
        user: {
          name: profile?.name,
          image: profile?.image,
          uid: profile?.uid,
        },
      });
      setMessage("");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "80%",
        float: "right",
      }}
    >
      {error && <Alert severity="error">送信できませんでした</Alert>}
      <Stack direction="row" spacing={2} sx={{ margin: "0.9rem" }}>
        <TextField
          size="medium"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          onClick={() => handleClick()}
          sx={{
            borderRadius: "0.3rem",
            p: "0.5rem 1.8rem",
            fontSize: "1.1rem",
            fontFamily: "游ゴシック",
            fontweight: 600,
          }}
        >
          送信
        </Button>
      </Stack>
    </Box>
  );
};

export default InputMessage;
