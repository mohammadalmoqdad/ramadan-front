import "./App.css";
import Login from "./components/Login";
import AuthProvider from "./contexts/AdminContext";

import Home from "./components/Home";
import cookie from "react-cookies";

import { useState, useEffect } from "react";
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import React from "react";
function App() {
  // const [test, isTest] = useState(false);
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          {/* <Login /> */}
          <Routes>
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>

  );
}

export default App;
