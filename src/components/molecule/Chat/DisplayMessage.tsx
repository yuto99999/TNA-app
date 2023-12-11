import { useRef, useLayoutEffect } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import useFirebase from "../Hooks/useFirebase";
import { Timestamp } from "firebase/firestore";
import useProfile from "../Hooks/useProfile";
import { format, formatDistance } from "date-fns";
import { ja } from "date-fns/locale";

interface Message {
  id: string;
  text: string;
  createdAt: Timestamp;
  user: {
    name: string;
    uid: string;
    image: string;
  };
}

const DisplayMessage = () => {
  const { documents: messages } = useFirebase("Messages");

  const profileData = useProfile();
  const profile = profileData.profile;

  const time = (date: Timestamp) => {
    let timestamp = formatDistance(new Date(), date.toDate(), {
      locale: ja,
    });
    if (timestamp.indexOf("未満") !== -1) {
      return (timestamp = "たった今");
    } else if (
      timestamp.indexOf("か月") !== -1 ||
      timestamp.indexOf("年") !== -1
    ) {
      return (timestamp = format(date.toDate(), "yyyy年M月d日", {
        locale: ja,
      }));
    } else {
      return (timestamp = timestamp + "前");
    }
  };

  const bottomRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    bottomRef?.current?.scrollIntoView();
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        pr: 4,
        p: "0 1.7rem 2rem 1.7rem",
        overflowY: "scroll",
        height: "85vh",
      }}
    >
      {messages ? (
        messages.map((message: Message) => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              flexDirection:
                profile && profile.uid === message.user.uid
                  ? "row-reverse"
                  : "row",
              my: 2,
              gap: 1,
            }}
          >
            <Box>
              <Avatar
                src={message.user.image ? message.user.image : ""}
                alt=""
              />
            </Box>
            <Box sx={{ m: "0 .7rem" }}>
              <Typography
                sx={{
                  p: 1.4,
                  background: "#F5F4EE",
                  borderRadius: 3,
                  fontSize: "1.2rem",
                  fontFamily: "游ゴシック",
                  fontWeight: 500,
                }}
              >
                {message.text}
              </Typography>
              <Typography sx={{ fontSize: ".8rem", mt: ".2rem" }}>
                {time(message.createdAt)}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <p>メッセージが存在しません</p>
      )}
      <div ref={bottomRef}></div>
    </Box>
  );
};

export default DisplayMessage;
