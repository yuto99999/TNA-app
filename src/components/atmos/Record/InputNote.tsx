import React from "react";
import { useState } from "react";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../..";
import useProfile from "../../molecule/Hooks/useProfile";

const InputNote = () => {
  const [note, setNote] = useState("");
  const [error, setError] = useState(false);

  const profileData = useProfile();
  const profile = profileData.profile;

  const handleClick = async () => {
    setError(false);
    const firestore = firebaseApp.firestore;
    if (note === "") {
      setError(true);
      return;
    }

    try {
      const docRef = collection(firestore, "Notes");
      await addDoc(docRef, {
        text: note,
        createdAt: Timestamp.fromDate(new Date()),
      });
      setNote("");
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
        width: "38%",
        float: "right",
      }}
    >
      {error && <Alert severity="error">送信できませんでした</Alert>}
      <Stack direction="row" spacing={2} sx={{ margin: "0.9rem" }}>
        <TextField
          size="medium"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          sx={{ flex: 1 }}
        />
        <Button
          variant="contained"
          onClick={() => handleClick()}
          sx={{
            borderRadius: "0.3rem",
            p: "0.5rem 1.2rem",
            fontSize: "1.1rem",
            fontFamily: "游ゴシック",
            fontweight: 600,
          }}
        >
          メモ
        </Button>
      </Stack>
    </Box>
  );
};

export default InputNote;
