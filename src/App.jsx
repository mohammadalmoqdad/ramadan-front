import React from "react";
import "./App.css";
import AuthProvider from "./contexts/AdminContext";
import AppBrowserRouter from "./components/AppBrowserRouter";
import { Global } from "@emotion/react/macro";
import { ThemeProvider } from "@emotion/react";
import getStyles from "./styles/global";
import useTheme from "./hooks/index";
import { arabicTheme, englishTheme } from "styles";

function App() {
  const { changeTheme, theme } = useTheme();
  return (
    <>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Global styles={getStyles(theme)} />
          <AppBrowserRouter changeTheme={changeTheme} theme={theme} />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;
