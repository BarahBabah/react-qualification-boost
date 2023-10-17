import { Suspense } from "react";
import { Counter } from "./Counter";
import "./../index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutPageAsync } from "./Page/AboutPage/AboutPage.async";
import { MainPageAsync } from "./Page/MainPage/MainPage.async";

function App() {
  return (
    <div className="app">
      <Link className="link" to={"/counter"}>
        Counter
      </Link>
      <Link className="link" to={"/about"}>
        About
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
