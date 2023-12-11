import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../..";
import useProfile from "../Hooks/useProfile";
import { Box, Button } from "@mui/material";

const AttendanceButton = () => {
  const [error, setError] = useState(false);
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
      alert("出勤しました！");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => handleAttendance("出社")}
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
        出社
      </Button>
      <Button
        variant="contained"
        onClick={() => handleAttendance("在宅")}
        sx={{
          bgcolor: "#2864F0",
          fontSize: "1.3rem",
          fontFamily: "游ゴシック",
          fontWeight: 600,
          borderRadius: "5rem",
          p: ".3rem 3rem",
        }}
      >
        在宅
      </Button>
    </Box>
  );
};

export default AttendanceButton;
