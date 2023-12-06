import { child, get, ref, set, getDatabase } from "firebase/database";
import { useState, VFC } from "react";
import { db } from "../../index";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Test: VFC = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const dbRef = ref(getDatabase());
  get(child(dbRef, `users`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  const doBackHome = () => {
    navigate("/Home");

  };
  return (
    <>
      <div>Page1</div>
      <input
        onChange={(e) => setUserName(e.target.value)}
        placeholder="ユーザー名を入力してください"
      ></input>
      <button
        onClick={() => {
          set(ref(db, "users/"), {
            username: userName,
          });
        }}
      >
        データ追加
      </button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        onClick={() => {
          doBackHome();
        }}
        sx={{ mt: 1.5, mb: 2 }}
      >
        戻る
      </Button>
    </>
  );
};
