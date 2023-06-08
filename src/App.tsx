import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { LoginView } from "./views/loginView/LoginView.tsx";
// import { ProjectView } from "./views/projectScreen/ProjectView.tsx";
// import { StartLayout } from "./layout/startLayout/StartLayout.tsx";
// import { DefaultLayout } from "./layout/defaulLayout/DefaultLayout.tsx";
// import { useAddBaseData } from "./utils/hooks/useAddBaseData.ts";

import { Outlet } from "react-router-dom";
import { useAppViewController } from "./useAppViewController.ts";

function App() {
  // useAddBaseData();
  useAppViewController();

  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
