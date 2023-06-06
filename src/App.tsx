import React from "react";
import { Routes, Route } from "react-router-dom";

import { LoginView } from "./views/loginView/LoginView.tsx";
import { ProjectView } from "./views/projectScreen/ProjectView.tsx";
import { StartLayout } from "./layout/startLayout/StartLayout.tsx";
import { DefaultLayout } from "./layout/defaulLayout/DefaultLayout.tsx";
import { IssueView } from "./views/issuesScreen/IssueView.tsx";
import { DashboardScreen } from "./views/dashboardScreen/DashboardScreen.tsx";

import { useAddBaseData } from "./utils/hooks/useAddBaseData.ts";

import "./scss/main.scss";

function App() {
  useAddBaseData();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartLayout />}>
          <Route index element={<LoginView />} />
          <Route path="/register" element={<LoginView />} />
          <Route path="/projects" element={<ProjectView />} />
        </Route>
        <Route path="project/:projectId" element={<DefaultLayout />}>
          <Route path="issues" element={<IssueView />} />
          <Route path="dashboard" element={<DashboardScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
