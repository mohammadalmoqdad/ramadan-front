import React, { useEffect, useLayoutEffect } from "react";
import cookie from "react-cookies";
import { Redirect, Route, useNavigate } from "react-router-dom";
function Home(props) {
  let navigate = useNavigate();
  useEffect(() => {
    console.log("inside the useeffect");
    if (!cookie.load("token")) {
      // return <Redirect to="/" />;
      navigate("/login");
      console.log("not logged in ");
    }
  }, []);

  return (
    <div>
      {console.log(
        "in return ---------------------------------------------------"
      )}
      {cookie.load("token") ? "loged in successfully" : "nothing to do"}
    </div>
  );
}

export default Home;
