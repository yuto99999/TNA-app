import { useRef, useLayoutEffect } from "react";
import InputMessage from "../molecule/InputMessage";
import { Box, Avatar, Typography } from "@mui/material";
import useFirebase from "../molecule/Hooks/useFirebase";
import { Timestamp } from "firebase/firestore";
import useProfile from "../molecule/Hooks/useProfile";
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

const Chat = () => {
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
        pb: 4,
        width: "80%",
        float: "right",
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
            <Box sx={{ ml: 2 }}>
              <Typography sx={{ p: 1, background: "#dddddd", borderRadius: 1 }}>
                {message.text}
              </Typography>
              <Typography sx={{ fontSize: 12 }}>
                {time(message.createdAt)}
              </Typography>
            </Box>
          </Box>
        ))
      ) : (
        <p>メッセージが存在しません</p>
      )}
      <div ref={bottomRef}></div>
      <InputMessage />
    </Box>
  );
};

export default Chat;
