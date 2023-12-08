import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChatBtn = () => {
  const navigate = useNavigate();
  const doChat = () => {
    navigate("/Chat");
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => {
          doChat();
        }}
      >
        Chat
      </Button>
    </Box>
  );
};

export default ChatBtn;
