import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../..";
import useProfile from "../Hooks/useProfile";
import { Box, Button } from "@mui/material";

const AttendanceButton = () => {
  const [type, setType] = useState("leave");
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
        onClick={() => handleAttendance("office")}
        sx={{ mr: 2 }}
      >
        出社
      </Button>
      <Button variant="contained" onClick={() => handleAttendance("remote")}>
        在宅
      </Button>
    </Box>
  );
};

export default AttendanceButton;
