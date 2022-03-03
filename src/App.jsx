import React from "react";
import { useState, useEffect } from "react";


import "./App.css";
import Login from "./components/Login";
import AuthProvider from "./contexts/AdminContext";
import Home from "./components/Home";
import Loder from "components/Loader";
import Group from "components/Group/Group";
import EditStandards from './components/EditStandards/EditStandards'
import Admins from './components/Admins/Admins'
import StudentsPoints from './components/studentsPoints/StudentsPoints'
import AddStandards from './components/AddStandards/AddStandards'


import { Route, BrowserRouter, Router, Routes } from "react-router-dom";

import cookie from "react-cookies";

import SetPasswordStudents from "components/setPasswordStudent/SetPasswordStudents";

function App() {
  // const [test, isTest] = useState(false);
  return (

    <>
      <AuthProvider>
        <BrowserRouter>

          <Routes>
            {/* <Route exact path="/login" component={Login} /> */} 
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/loading" element={<Loder />} />
            <Route exact path= "/set-student-password" element= {<SetPasswordStudents/>}  ></Route>
            <Route exact path= "/EditStandards" element= {<EditStandards/>}  ></Route>
            <Route exact path= "/Groups" element= {<Group/>}  ></Route>
            <Route exact path= "/Admins" element= {<Admins/>}  ></Route>
            <Route exact path= "/AddNewStandards" element= {<AddStandards/>}  ></Route>
            <Route exact path= "/StudentsPoints" element= {<StudentsPoints/>}  ></Route>

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
