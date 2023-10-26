import React from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
