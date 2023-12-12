"use client";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./components/organisms/Auth/register";
import Login from "./components/organisms/Auth/Login";
import Profile from "./components/organisms/Profile";
import Record from "./components/organisms/Record";
import Sidebar from "./components/template/Sidebar";
import Chat from "./components/organisms/Chat";
import Home from "./components/template/Home";
import RecordLogin from "./components/molecule/Record/RecordLogin";
import Menu from "./components/molecule/Record/Menu";

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
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Record" element={<Record />} />
          <Route path="/RecordLogin" element={<RecordLogin />} />
          <Route path="/Menu" element={<Menu />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
