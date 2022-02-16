import React, { useEffect, useLayoutEffect } from "react";
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
import Sidebar from "components/shared/Sidebar";
import { HomeContainer } from "./home.styles";
let flag = 0;
function Home(props) {
  let navigate = useNavigate();
  useEffect(() => {
    console.log("inside the useeffect");
    if (!cookie.load("token")) {
      navigate("/login");
      console.log("not logged in ");
    }
  }, []);
  console.log("inside the Home", cookie.load("token"));

  return (
    <HomeContainer>
      <Sidebar />
      <div>home</div>

      <button
        onClick={() => {
          cookie.remove("token");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </HomeContainer>
  );
}

export default Home;
