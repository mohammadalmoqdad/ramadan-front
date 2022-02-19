import "./App.css";
import Login from "./components/Login";
import AuthProvider from "./contexts/AdminContext";
import Home from "./components/Home";
import cookie from "react-cookies";
import { useState, useEffect } from "react";
import AddCriterias from "./components/AddCriterias";
function App() {
  const [test, isTest] = useState(false);
  return (
    <AuthProvider>
      <AddCriterias />
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
