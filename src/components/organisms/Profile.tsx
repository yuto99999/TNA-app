import React, { useState } from "react";
import {
  Alert,
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
      setError(false);
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
    <Box width="80%" pt={8} sx={{ float: "right" }}>
      <Container sx={{ width: "48%" }}>
        <Typography
          textAlign="center"
          fontSize="2rem"
          fontFamily="游ゴシック"
          fontWeight={600}
        >
          プロフィール編集
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Avatar
              src={
                image
                  ? URL.createObjectURL(image)
                  : profile
                  ? profile.image
                  : ""
              }
              alt="アイコン"
              sx={{ width: 90, height: 90 }}
            />
            <Box>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleChange}
                style={{ display: "none" }}
              />
              <label htmlFor="image">
                <Button
                  variant="outlined"
                  component="span"
                  sx={{
                    fontSize: "1.2rem",
                    fontFamily: "游ゴシック",
                    fontWeight: 600,
                    borderRadius: "5rem",
                    p: "0.5rem 3rem",
                  }}
                >
                  画像を選択
                </Button>
              </label>
            </Box>
          </Box>
          <Box textAlign="center">
            <TextField
              required
              fullWidth
              id="name"
              label="ユーザー名"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              sx={{ mt: 5, mb: 5 }}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#2864F0",
                fontSize: "1.2rem",
                fontFamily: "游ゴシック",
                fontWeight: 600,
                borderRadius: "5rem",
                mt: 2,
                p: "0.5rem 0",
              }}
            >
              {profile ? "更新" : "作成"}
            </Button>
            {success && (
              <Alert
                severity="success"
                sx={{
                  mt: 5,
                  fontSize: "1.2rem",
                  fontFamily: "游ゴシック",
                  fontWeight: 600,
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                プロフィールの{profile ? "更新" : "作成"}が完了しました
              </Alert>
            )}
            {error && (
              <Alert
                severity="error"
                sx={{
                  mt: 5,
                  fontSize: "1.2rem",
                  fontFamily: "游ゴシック",
                  fontWeight: 600,
                  alignItems: "center",
                  borderRadius: 3,
                }}
              >
                プロフィールの{profile ? "更新" : "作成"}ができませんでした
              </Alert>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
