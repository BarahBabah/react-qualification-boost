import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "Pages/AboutPage";
import { MainPage } from "Pages/MainPage";
import { routeConfig } from "shared/config/routeConfig/routeConfig";
const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
