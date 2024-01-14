import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { firebaseApp } from "../../../..";
import { Avatar, Box, Typography } from "@mui/material";
import useRecord from "../../Hooks/useRecord";
import Note from "../Note";

interface Record {
  createdAt: Timestamp;
  type: string;
  user: {
    name: string;
    uid: string;
    image: string;
  };
}

const RemoteWorker = () => {
  const { documents: officeRecord } = useRecord("Records", "在宅");

  const [records, setRecords] = useState<Array<any>>([]);
  const db = firebaseApp.firestore;

  useEffect(() => {
    const fetchRecords = async () => {
      const recordsRef = collection(firebaseApp.firestore, "Records");
      const q = query(recordsRef, where("type", "==", "在宅"));

      const querySnapshot = await getDocs(q);
      const fetchedRecords = querySnapshot.docs.map((doc) => doc.data());
      setRecords(fetchedRecords);
    };

    fetchRecords();
  }, []);

  return (
    <Box display="flex">
      <Box p={3} width="50%">
        {officeRecord.map((Records: Record, index) => (
          <Box
            key={index}
            width="auto"
            display="flex"
            alignItems="center"
            bgcolor="#F5F4EE"
            m={2}
            mb={3}
            p={2}
            borderRadius={5}
          >
            <Avatar src={Records.user.image} sx={{ mr: 2 }} />
            <Typography sx={{ ...styledFont, mr: 2 }}>
              {Records.user.name}
            </Typography>
            <Typography sx={{ ...styledFont, mr: 2 }}>
              {Records.type}
            </Typography>
            <Typography sx={{ ...styledFont, mr: 2 }}>
              {Records.createdAt.toDate().toLocaleString()}
            </Typography>
          </Box>
        ))}
      </Box>
      <Note />
    </Box>
  );
};

const styledFont = {
  fontSize: "1.2rem",
  fontFamily: "游ゴシック",
  fontWeight: 600,
};

export default RemoteWorker;
