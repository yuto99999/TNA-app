import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { firebaseApp } from "../../..";
import { Avatar, Box, Typography } from "@mui/material";
import useRecord from "../Hooks/useRecord";
import useFirebase from "../Hooks/useFirebase";

interface Record {
  createdAt: Timestamp;
  type: string;
  user: {
    name: string;
    uid: string;
    image: string;
  };
}

const OfficeWorker = () => {
  const { documents: officeRecord } = useFirebase("Records");

  const [records, setRecords] = useState<Array<any>>([]);
  const firestore = firebaseApp.firestore;

  useEffect(() => {
    const fetchRecords = async () => {
      const recordsRef = collection(firestore, "Records");
      const q = query(recordsRef, where("type", "==", "office"));

      const querySnapshot = await getDocs(q);
      const fetchedRecords = querySnapshot.docs.map((doc) => doc.data());
      setRecords(fetchedRecords);
    };

    fetchRecords();
  }, []);

  return (
    <Box>
      {officeRecord.map((Records: Record, index) => (
        <Box key={index}>
          <Typography>Type: {Records.type}</Typography>
          <Typography>
            Timestamp: {Records.createdAt.toDate().toLocaleString()}
          </Typography>
          <Typography>User Name: {Records.user.name}</Typography>
          <Avatar src={Records.user.image} />
        </Box>
      ))}
    </Box>
  );
};

export default OfficeWorker;
