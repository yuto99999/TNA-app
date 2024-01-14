import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OfficeWorker from "../molecule/Record/DisplayWorker/OfficeWorker";
import RemoteWorker from "../molecule/Record/DisplayWorker/RemoteWorker";
import NoWorker from "../molecule/Record/DisplayWorker/NoWorker";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Record = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      width="80%"
      height="100vh"
      sx={{ float: "right", overflowY: "scroll" }}
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider", pl: 20 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="出社" {...a11yProps(0)} />
          <Tab label="在宅" {...a11yProps(1)} />
          <Tab label="退勤" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OfficeWorker />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RemoteWorker />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <NoWorker />
      </CustomTabPanel>
    </Box>
  );
};

export default Record;
