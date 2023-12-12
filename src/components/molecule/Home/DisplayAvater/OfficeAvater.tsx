import { Avatar, Box, Typography } from "@mui/material";
import useProfile from "../../Hooks/useProfile";

const OfficeAvater = () => {
  const profileData = useProfile();
  const profile = profileData.profile;

  return (
    <>
      <Box
        width="25%"
        height="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{ border: "solid .5rem #F5F4EE", borderRadius: "1rem" }}
      >
        <Typography
          mt={2}
          fontSize="1.6rem"
          fontFamily="游ゴシック"
          fontWeight={600}
        >
          出社
        </Typography>
        <Box
          width="80%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#F5F4EE"
          m={2}
          mb={3}
          p={2}
          borderRadius={5}
        >
          <Avatar
            src={profile ? profile.image : ""}
            alt="アイコン"
            sx={{ mr: 2 }}
          />
          <Typography sx={{ ...styledFont }}>
            {profile ? profile.name : ""}
          </Typography>
        </Box>
        <Box
          width="80%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="#F5F4EE"
          m={2}
          mb={3}
          p={2}
          borderRadius={5}
        >
          <Avatar
            src={profile ? profile.image : ""}
            alt="アイコン"
            sx={{ mr: 2 }}
          />
          <Typography sx={{ ...styledFont }}>
            {profile ? profile.name : ""}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const styledFont = {
  fontSize: "1.2rem",
  fontFamily: "游ゴシック",
  fontWeight: 600,
};

export default OfficeAvater;
