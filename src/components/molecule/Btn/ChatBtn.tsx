import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatBtn = () => {
  const navigate = useNavigate();
  const doChat = () => {
    navigate("/Chat");
  };

  return (
    <Button
      variant="text"
      fullWidth
      onClick={() => {
        doChat();
      }}
      sx={{
        color: "#000000",
        fontSize: "1.3rem",
        fontFamily: "游ゴシック",
        fontWeight: 600,
      }}
    >
      Chat
    </Button>
  );
};

export default ChatBtn;
