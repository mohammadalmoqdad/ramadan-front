import React, { useEffect } from "react";
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
import ContestModerator from "components/ContestModerator";
import ContestCriteria from "components/ContestCriteria";
import EditProfile from "components/EditProfile";
import { Container, MainContent } from "./router.styled";
import Navbar from "../shared/Navbar";
import Sidebar from "../shared/Sidebar";

export default function AppBrowserRouter({ changeTheme, theme }) {
  return (
    <BrowserRouter>
      <Container>
        <Sidebar />
        <MainContent>
          <Navbar changeTheme={changeTheme} theme={theme} />
          <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/reset-password" element={<ResetPassword />} />
            <Route exact path="/forgot-password" element={<ForgotPassword />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/edit-profile" element={<EditProfile />} />
            <Route exact path="/competition" element={<Competition />} />
            <Route exact path="/top-students" element={<TopStudents />} />
            <Route exact path="/loading" element={<Loader />} />
            <Route exact path="/students" element={<Students />} />
            <Route exact path="/groups" element={<Groups />} />
            <Route exact path="/admins" element={<ContestModerator />} />
            {/* <Route exact path="/standards" element={<Standards />} /> */}
            <Route
              exact
              path="/contest-criteria"
              element={<ContestCriteria />}
            />
            <Route
              exact
              path="/review-other-points"
              element={<ReviewOtherPoints />}
            />
            <Route exact path="/students-points" element={<StudentsPoints />} />
            <Route exact path="/export-points" element={<ExportPoints />} />
          </Routes>
        </MainContent>
      </Container>
    </BrowserRouter>
  );
}
