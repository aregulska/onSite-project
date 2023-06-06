import React from "react";

import ApartmentIcon from "@mui/icons-material/Apartment";

import { useProjectRowController } from "./useProjectRowController";
import { Project } from "../../../store/projects/projectsMeta";

// CEL: wyświetlenie pojedynczego projektu
export const ProjectRow = ({ project }: { project: Project }) => {
  const { handleChooseProject } = useProjectRowController();

  return (
    <div
      className="project-row"
      onClick={() => handleChooseProject(project.id)}
    >
      <div className="project-row__img">
        <div className="project-row__img--alt">
          <ApartmentIcon sx={{ fontSize: "20px" }} />
        </div>
        <img src={project.photoUrl} alt="building" />
      </div>
      <div className="project-row__info">{project.title}</div>
      {false && <div className="project-row__loader"></div>}
    </div>
  );
};
