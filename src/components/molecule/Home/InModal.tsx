import * as React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import AttendanceButton from "../Btn/AttendanceBtn";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -80%)",
  width: "30%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
  marginTop: "3rem",
};

export default function InModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box marginRight="3rem">
      <Button
        onClick={handleOpen}
        variant="contained"
        sx={{
          bgcolor: "#2864F0",
          fontSize: "1.7rem",
          fontFamily: "游ゴシック",
          fontWeight: 600,
          borderRadius: "5rem",
          p: "0.5rem 7rem",
        }}
      >
        出勤
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" p={2} fontSize="1.5rem" fontFamily="游ゴシック" fontWeight={600}>
            出社形態を選択してください
          </Typography>
          <AttendanceButton />
        </Box>
      </Modal>
    </Box>
  );
}
