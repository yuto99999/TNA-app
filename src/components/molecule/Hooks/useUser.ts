import React from 'react'
import { getAuth } from "firebase/auth";

const useUser = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    const email = user.email;
    const uid = user.uid;

    const userInfo = {
      email,
      uid,
    };

    return { user: userInfo };
  } else {
    return { user };
  }
};

export default useUser;
