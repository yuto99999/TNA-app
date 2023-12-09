import React from "react";
import { useState } from "react";
import { Alert, Box, Button, Divider, Stack, TextField } from "@mui/material";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../..";
import HomeBtn from "./Btn/HomeBtn";
import useProfile from "./Hooks/useProfile";

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
        width: "100%",
      }}
    >
      {error && <Alert severity="error">送信できませんでした</Alert>}
      <Divider />
      <Stack direction="row" spacing={2} sx={{ margin: "0.5rem 1rem" }}>
        <TextField
          size="small"
          value={message}
          sx={{ flex: 1 }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" onClick={() => handleClick()}>
          送信
        </Button>
        <HomeBtn />
      </Stack>
    </Box>
  );
};

export default InputMessage;
