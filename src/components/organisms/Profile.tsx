import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Container,
  Avatar,
} from "@mui/material";

const Profile = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0]);
    }
  };

  const doBackHome = () => {
    navigate("/Home");
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ m: 4, p: 4 }}>
        <Typography align="center">プロフィール編集</Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Avatar src={image ? URL.createObjectURL(image) : ""} alt="" />
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            保存
          </Button>
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
        </Box>
      </Paper>
    </Container>
  );
};

export default Profile;
