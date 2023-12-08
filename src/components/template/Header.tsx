import React from "react";
import { Box, Avatar, Typography } from "@mui/material";
import Logout from "../organisms/Authentication/Logout";
import ProfileBtn from "../molecule/Btn/ProfileBtn";
import ChatBtn from "../molecule/Btn/ChatBtn";
import useProfile from "../molecule/Hooks/useProfile";

const Header = () => {
  const profileData = useProfile();
  const profile = profileData.profile;

  return (
    <Box display="flex" alignItems="center">
      <Box>
        <Avatar src={profile ? profile.image : ""} alt="" />
        <Typography>{profile ? profile.name : ""}</Typography>
      </Box>
      <Logout />
      <ProfileBtn />
      <ChatBtn />
    </Box>
  );
};

export default Header;
