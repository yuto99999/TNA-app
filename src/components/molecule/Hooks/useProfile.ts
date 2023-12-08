import { useState, useEffect } from "react";
import { firebaseApp } from "../../..";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore";

const useProfile = () => {
  const [profile, setProfile] = useState<DocumentData | null>(null);

  useEffect(() => {
    const auth: Auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userUid = user.uid;
        const firestore = firebaseApp.firestore;

        const q = query(
          collection(firestore, "Users"),
          where("uid", "==", userUid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const docData = doc.data();
          docData.id = doc.id;
          setProfile(docData);
        });
      }
    });
  }, []);

  return { profile };
};

export default useProfile;
