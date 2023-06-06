import React from "react";

import { ProjectList } from "./containers/ProjectList";
import { LogOutButton } from "../../components/components/buttons/logOutButton/LogOutButton";

import { useProjectViewController } from "./useProjectViewController.ts";

// CEL KOMPONENTU: wyrenderowanie komponentów projektu

export const ProjectView = () => {
  console.log("RENDER: PROJECT SCREEN");
  const { loadingIssues, loadingProjects } = useProjectViewController();

  return (
    <div>
      {false && (
        <p>
          {loadingIssues ? "LOADING" : "done"} /{" "}
          {loadingProjects ? "LOADING" : "done"}
        </p>
      )}
      <LogOutButton action={() => {}} />
      <ProjectList />
    </div>
  );
};
