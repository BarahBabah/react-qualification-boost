import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, handleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleTheme}>Сменить тему</button>
      <Link className="link" to={"/about"}>
        ABOUT
      </Link>
      <Link className="link" to={"/"}>
        Main
      </Link>
      <AppRouter />
    </div>
  );
}

export default App;
