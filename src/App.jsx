import "./App.css";
import Login from "./components/Login";
import AuthProvider from "./contexts/AdminContext";

import Home from "./components/Home";
import cookie from "react-cookies";
import Loder from "components/Loader";
import { useState, useEffect } from "react";

import AddCriterias from "./components/AddCriterias";
import EditStandards from './components/EditStandards/EditStandards'

import { Route, BrowserRouter, Router, Routes } from "react-router-dom";
import React from "react";
import SetPasswordStudents from "components/setPasswordStudent/SetPasswordStudents";
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
            <Route exact path="/loading" element={<Loder />} />
            <Route exact path= "/set-student-password" element= {<SetPasswordStudents/>}  ></Route>
            <Route exact path= "/EditStandards" element= {<EditStandards/>}  ></Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
