import { Suspense, useContext, useState } from "react";
import { Counter } from "./components/Counter";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "./Pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./Pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

function App() {
  const { theme, handleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={handleTheme}>Сменить тему</button>
      <Link className="link" to={"/counter"}>
        Counter
      </Link>
      <Link className="link" to={"/about"}>
        ABOUT
      </Link>
      <Link className="link" to={"/"}>
        Main
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/counter"} element={<Counter />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
