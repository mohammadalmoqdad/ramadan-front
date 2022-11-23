import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import Home from "../Home";
import Loader from "../Loader";
import Students from "../Students";
import Groups from "../Groups";
import Admins from "../Admins";
import Standards from "../Standards";
import StudentsPoints from "../studentsPoints";
import Competition from "../Competition";
import TopStudents from "../TopStudents";
import ExportPoints from "../ExportPoints";
import ReviewOtherPoints from "../ReviewOtherPoints";
import AppLayout from "../AppLayout";
export default function AppBrowserRouter({ changeTheme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<AppLayout children={<Home />} />} />
        <Route
          exact
          path="/Competition"
          element={<AppLayout children={<Competition />} />}
        />
        <Route
          exact
          path="/Signup"
          element={<AppLayout children={<Signup />} />}
        />
        <Route
          exact
          path="/TopStudents"
          element={<AppLayout children={<TopStudents />} />}
        />
        <Route exact path="/loading" element={<Loader />} />
        <Route
          exact
          path="/Students"
          element={<AppLayout children={<Students />} />}
        />
        <Route
          exact
          path="/Groups"
          element={<AppLayout children={<Groups />} />}
        />
        <Route
          exact
          path="/Admins"
          element={<AppLayout children={<Admins />} />}
        />
        <Route
          exact
          path="/Standards"
          element={<AppLayout children={<Standards />} />}
        />
        <Route
          exact
          path="/Review-other-points"
          element={<AppLayout children={<ReviewOtherPoints />} />}
        />
        <Route
          exact
          path="/StudentsPoints"
          element={<AppLayout children={<StudentsPoints />} />}
        />
        <Route
          exact
          path="/ExportPoints"
          element={<AppLayout children={<ExportPoints />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
