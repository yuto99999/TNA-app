"use client";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/organisms/Authentication/register";
import Login from "./components/organisms/Authentication/Login";
import Top from "./components/template/Top";
import Profile from "./components/organisms/Profile";
import Chat from "./components/organisms/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Top />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
