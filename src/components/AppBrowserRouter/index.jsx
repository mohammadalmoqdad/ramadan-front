import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import ResetPassword from "../ResetPassword";
import ForgotPassword from "../ForgotPassword";
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
import ContestModerator from "components/ContestModerator";
import ContestCriteria from "components/ContestCriteria";
import EditProfile from "components/EditProfile";

export default function AppBrowserRouter({ changeTheme }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/Signup" element={<Signup />} />
        <Route exact path="/ResetPassword" element={<ResetPassword />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/EditProfile" element={<EditProfile />} />

        <Route exact path="/" element={<AppLayout children={<Home />} />} />
        <Route
          exact
          path="/Competition"
          element={<AppLayout children={<Competition />} />}
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
          element={<AppLayout children={<ContestModerator />} />}
        />
        <Route
          exact
          path="/Standards"
          element={<AppLayout children={<Standards />} />}
        />
        <Route
          exact
          path="/ContestCriteria"
          element={<AppLayout children={<ContestCriteria />} />}
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
