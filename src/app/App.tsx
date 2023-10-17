import { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "Pages/AboutPage";
import { MainPage } from "Pages/MainPage";

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
