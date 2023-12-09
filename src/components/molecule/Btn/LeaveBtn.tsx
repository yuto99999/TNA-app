import React, { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firebaseApp } from "../../..";
import useProfile from "../Hooks/useProfile";
import { Button } from "@mui/material";

const LeaveButton = () => {
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
      alert("お疲れ様でした！")
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <Button variant="contained" onClick={() => handleAttendance("leave")}>
      退勤
    </Button>
  );
};

export default LeaveButton;
