import React, { useEffect, useLayoutEffect } from "react";
import cookie from "react-cookies";
import Login from "components/Login";
function Home({ test }) {
  console.log(cookie.load("token"));
  useEffect(() => {
    console.log("inside the useeffect");
    if (cookie.load("token")) {
      console.log("logged in");
    } else {
      console.log("not logged in");
    }
  }, [test]);
  return (
    <div>
      {console.log('in return ---------------------------------------------------')}
      <h1>home --------------</h1>
      {cookie.load("token") ? "loged in successfully" : "nothing to do"}
    </div>
  );
}

export default Home;
