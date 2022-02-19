import "./App.css";
import Login from "./components/Login";
import AuthProvider from "./contexts/AdminContext";

import Home from "./components/Home";
import cookie from "react-cookies";

import { useState, useEffect } from "react";
<<<<<<< HEAD
import AddCriterias from "./components/AddCriterias";
=======
import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import React from "react";
>>>>>>> 67d9fa39b1b935dc04e46d8c2a057af99ae94d18
function App() {
  // const [test, isTest] = useState(false);
  return (
<<<<<<< HEAD
    <AuthProvider>
      <AddCriterias />
      <Login />
      <Home test={test} />
      <button
        onClick={() => {
          cookie.remove("token");
        }}
      >
        logout
      </button>
    </AuthProvider>
=======
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

>>>>>>> 67d9fa39b1b935dc04e46d8c2a057af99ae94d18
  );
}

export default App;
