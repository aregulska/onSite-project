import React from "react";

import { ProjectList } from "./containers/ProjectList";
import { LogOutButton } from "../../ui/components/buttons/logOutButton/LogOutButton";

// import { useProjectViewController } from "./useProjectViewController.ts";

// CEL KOMPONENTU: wyrenderowanie komponentów projektu

export const ProjectView = () => {
  //console.log("RENDER: PROJECT SCREEN");
  // useProjectViewController();

  return (
    <div>
      <LogOutButton action={() => {}} />
      <ProjectList />
    </div>
  );
};
