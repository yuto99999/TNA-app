"use client";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./components/organisms/Authentication/register";
import Login from "./components/organisms/Authentication/Login";
import Top from "./components/template/Top";
import Profile from "./components/organisms/Profile";
import Chat from "./components/organisms/Chat";
import Record from "./components/organisms/Record";
import { Box, ThemeProvider } from "@mui/material";
import Sidebar from "./components/template/Sidebar";

function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/Home" element={<Top />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Record" element={<Record />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
