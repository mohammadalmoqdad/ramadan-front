import "./App.css";
import AuthProvider, {} from "./contexts/AdminContext";
import React from "react";
import AppBrowserRouter from "./components/AppBrowserRouter/AppBrowserRouter";
function App() {
  // const [test, isTest] = useState(false);
  return (

    <>
      <AuthProvider>
        <AppBrowserRouter/>
      </AuthProvider>
    </>
  );
}

export default App;
