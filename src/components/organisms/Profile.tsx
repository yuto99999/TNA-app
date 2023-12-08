import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Container,
  Avatar,
} from "@mui/material";
import { firebaseApp } from "../..";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import useUser from "../molecule/Hooks/useUser";
import useProfile from "../molecule/Hooks/useProfile";
import HomeBtn from "../molecule/Btn/HomeBtn";

const Profile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const firestorage = firebaseApp.firestorage;
  const firestore = firebaseApp.firestore;

  const { user } = useUser();

  const profileData = useProfile();
  const profile = profileData.profile;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const uid = user!.uid;
      const docRef = collection(firestore, "Users");

      if (image) {
        const imageRef = ref(firestorage, image.name);
        uploadBytes(imageRef, image).then(() => {
          getDownloadURL(imageRef).then(async (url) => {
            if (profile) {
              const userRef = doc(firestore, "Users", profile?.id);
              await updateDoc(userRef, {
                name,
                image: url,
              });
            } else {
              await addDoc(docRef, {
                name,
                image: url,
                uid,
              });
            }
          });
        });
      } else {
        if (profile) {
          const userRef = doc(firestore, "Users", profile?.id);
          await updateDoc(userRef, { name });
        } else {
          await addDoc(docRef, { name, image: "", uid });
        }
      }
      setSuccess(true);
      alert("完了");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ m: 4, p: 4 }}>
        <Typography align="center">プロフィール編集</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Avatar
              src={
                image
                  ? URL.createObjectURL(image)
                  : profile
                  ? profile.image
                  : ""
              }
              alt=""
            />
            <div>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <label htmlFor="image">
                <Button variant="contained" color="primary" component="span">
                  画像を選択
                </Button>
              </label>
            </div>
          </Box>

          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="ユーザー名"
            name="name"
            autoComplete="name"
            autoFocus
            value={
              name !== null && name !== undefined
                ? name
                : profile
                ? profile.name
                : ""
            }
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {profile ? "更新" : "作成"}
          </Button>
          <HomeBtn />
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
