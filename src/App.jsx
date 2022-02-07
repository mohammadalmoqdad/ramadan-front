import "./App.css";
import Login from "./components/Login";
// import AdminContext from "./contexts/AdminContext";
import AuthProvider from "./contexts/AuthProvider";

import Home from "./components/Home";
import cookie from "react-cookies";

import { useState, useEffect, useContext } from "react";
function App() {
  const [test, isTest] = useState(false);

  // const context = useContext(AdminContext);

  // console.log(context);

  return (
    <AuthProvider>

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
  );
}

export default App;
