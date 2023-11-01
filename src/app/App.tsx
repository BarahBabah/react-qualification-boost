import React, { Suspense } from "react";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { SideBar } from "widgets/SideBar";
import i18n from "shared/config/i18n/i18n";
import { useTranslation } from "react-i18next";
export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const Component = () => {
  const { t, i18n } = useTranslation();
  return <div{ t("")}></div>
};

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
