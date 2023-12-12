import { Box, Typography } from "@mui/material";
import useFirebase from "../../molecule/Hooks/useFirebase";

interface Note {
  text: string;
}

const DisplayNote = () => {
  const { documents: notes } = useFirebase("Notes");

  return (
    <Box
      sx={{
        flexGrow: 1,
        pr: 4,
        p: "0 1.7rem 2rem 1.7rem",
        overflowY: "scroll",
        height: "80vh",
        pt: "3rem",
      }}
    >
      {notes ? (
        notes.map((note: Note, index) => (
          <Box key={index}>
            <Box sx={{ mb: "1rem" }}>
              <Typography
                sx={{
                  p: 2,
                  background: "#FFFFFF",
                  borderRadius: 3,
                  fontSize: "1.2rem",
                  fontFamily: "游ゴシック",
                  fontWeight: 600,
                }}
              >
                {note.text}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <p>メッセージが存在しません</p>
      )}
    </Box>
  );
};

export default DisplayNote;
