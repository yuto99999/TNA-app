import React from "react";
import { Box, Avatar, Typography, Grid } from "@mui/material";
import Logout from "../organisms/Authentication/Logout";
import ProfileBtn from "../molecule/Btn/ProfileBtn";
import ChatBtn from "../molecule/Btn/ChatBtn";
import useProfile from "../molecule/Hooks/useProfile";
import RecordBtn from "../molecule/Btn/RecordBtn";
import HomeBtn from "../molecule/Btn/HomeBtn";

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
      sx={{ float: "left" }}
    >
      <Box mt={4} textAlign="center">
        <Avatar
          src={profile ? profile.image : ""}
          alt="アイコン"
          sx={{ width: 75, height: 75 }}
        />
        <Typography pt={1} pb={1} fontSize="1.5rem" fontFamily="游ゴシック" fontWeight={600}>
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
