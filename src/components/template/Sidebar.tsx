import React from "react";
import { Box, Avatar, Typography, Grid } from "@mui/material";
import ProfileBtn from "../molecule/Btn/ProfileBtn";
import ChatBtn from "../molecule/Btn/ChatBtn";
import useProfile from "../molecule/Hooks/useProfile";
import RecordBtn from "../molecule/Btn/RecordBtn";
import HomeBtn from "../molecule/Btn/HomeBtn";
import Logout from "../organisms/Auth/Logout";

const Sidebar = () => {
  const profileData = useProfile();
  const profile = profileData.profile;

  return (
    <Box
      width="20%"
      height="100vh"
      bgcolor="#F5F4EE"
      display="flex"
      flexDirection="column"
      alignItems="center"
      position="sticky"
      sx={{ float: "left" }}
    >
      <Box mt={4} display="flex" flexDirection="column" alignItems="center">
        <Avatar
          src={profile ? profile.image : ""}
          alt="アイコン"
          sx={{ width: 80, height: 80 }}
        />
        <Typography
          pt={1.5}
          pb={2}
          fontSize="1.5rem"
          fontFamily="游ゴシック"
          fontWeight={600}
        >
          {profile ? profile.name : ""}
        </Typography>
      </Box>
      <HomeBtn />
      <ProfileBtn />
      <ChatBtn />
      <RecordBtn />
      <Logout />
    </Box>
  );
};

export default Sidebar;
