import React from "react";
import "./App.css";
import AuthProvider from "./contexts/AdminContext";
import AppBrowserRouter from "./components/AppBrowserRouter";
import { Global } from "@emotion/react/macro";
import { ThemeProvider } from "@emotion/react";
import getStyles from "./styles/global";
import useTheme from "./hooks/index";
import { englishTheme } from "styles";

function App() {
  const { changeTheme, theme } = useTheme();
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Global styles={getStyles(englishTheme)} />
          <AppBrowserRouter changeTheme={changeTheme} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
