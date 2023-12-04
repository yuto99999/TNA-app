import React from 'react';
import './App.css';
import Register from './components/template/Authentication/register';
import Login from './components/template/Authentication/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/template/Header';
import Logout from './components/template/Authentication/Logout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Home"
          element={
            <>
              <Header />
              <Logout />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
