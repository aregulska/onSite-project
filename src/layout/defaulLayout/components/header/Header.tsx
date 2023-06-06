import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { LogOutButton } from "../../../../components/components/buttons/logOutButton/LogOutButton";

import { useUiContext } from "../../../../contexts/uiContext";
import { useGetOneProject } from "../../../../store/projects/projectsSlice";
import { useChangeProject } from "../../../../utils/hooks/useChangeProject";
import { useGetOnePlan } from "../../../../store/plans/plansSlice";
import { useGetOneIssue } from "../../../../store/issues/issueSlice";

//TODO: wyciągnąć button zmiany projektu
export const Header = () => {
  const { project: projectId, file: fileId, issue: issueId } = useUiContext();
  const project = useGetOneProject(projectId);
  const file = useGetOnePlan(fileId);
  const issue = useGetOneIssue(issueId);
  // console.log("HEADER", projectId, project);
  const handleChangeProject = useChangeProject();

  const headerTitle =
    "Project:  " +
    project?.title +
    "File:" +
    file?.title +
    "Issue:" +
    issue?.title;
  const headerTitleShort = `${project ? project.title : "No project"}`;

  return (
    <div className="header">
      {false && (
        <div className="header__menu" onClick={handleChangeProject}>
          <ArrowBackIcon sx={{ fontSize: 24 }} />
        </div>
      )}
      <div className="header__title">{headerTitleShort}</div>
      <div className="header__menu">
        <LogOutButton action={() => {}} />
      </div>
    </div>
  );
};
