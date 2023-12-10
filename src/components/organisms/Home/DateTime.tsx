import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

const weekday = ["日", "月", "火", "水", "木", "金", "土"];

const DateTime = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      let dayofweek = d.getDay();
      setDate(
        year + "年" + month + "月" + day + "日" + "[" + weekday[dayofweek] + "]"
      );
      let hour = d.getHours().toString().padStart(2, "0");
      let minute = d.getMinutes().toString().padStart(2, "0");
      let seconds = d.getSeconds().toString().padStart(2, "0");
      setTime(hour + ":" + minute + ":" + seconds);
    }, 1000);
  }, []);

  return (
    <Box textAlign="center" pt={10}>
      <Typography fontSize="2rem" fontFamily="游ゴシック" fontWeight={600}>
        {date}
      </Typography>
      <Typography fontSize="6.5rem" fontFamily="游ゴシック" fontWeight={600} letterSpacing={5}>
        {time}
      </Typography>
    </Box>
  );
};

export default DateTime;
