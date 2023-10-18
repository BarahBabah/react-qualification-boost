import React from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, handleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleTheme}>Сменить тему</button>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
