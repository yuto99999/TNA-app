import { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { firebaseApp } from "../../..";

const useRecord = (data: string, type: string) => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const firestore = firebaseApp.firestore;
    const docRef = collection(firestore, data);
    const queryRef = query(
      docRef,
      where("type", "==", type),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(queryRef, (snapshot) => {
      let results: any = [];
      snapshot.docs.forEach((doc) => {
        results.push({ ...doc.data(), id: doc.id });
      });
      setDocuments(results);
    });
    return () => unsub();
  }, [data, type]);

  return { documents };
};

export default useRecord;
