import { createBrowserRouter } from "react-router-dom";
import { StartLayout } from "../layout/startLayout/StartLayout";
import { LoginView } from "../views/loginView/LoginView";
import { ProjectView } from "../views/projectScreen/ProjectView";
import { DefaultLayout } from "../layout/defaulLayout/DefaultLayout";
import { IssueView } from "../views/issuesScreen/IssueView";
import { DashboardScreen } from "../views/dashboardScreen/DashboardScreen";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <StartLayout />,
        children: [
          { index: true, element: <LoginView /> },
          {
            path: "/register",
            element: <LoginView />,
          },
          {
            path: "/projects",
            element: <ProjectView />,
          },
        ],
      },
      {
        path: "project/:projectId",
        element: <DefaultLayout />,
        children: [
          {
            path: "issues",
            element: <IssueView />,
          },
          { path: "dashboard", element: <DashboardScreen /> },
        ],
      },
    ],
  },
]);
