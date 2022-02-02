import React, { useEffect } from "react";
import cookie from "react-cookies";

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
      {cookie.load("token") ? "loged in successfully" : "nothing to do"}
    </div>
  );
}

export default Home;
