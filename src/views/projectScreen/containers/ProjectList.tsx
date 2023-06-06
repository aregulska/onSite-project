import React from "react";

import { ProjectRow } from "../components/ProjectRow";

import { useGetAllProjects } from "../../../store/projects/projectsSlice";

//CEL KOMPONENTU: wyświetlenie listy projektów
export const ProjectList = () => {
  const projects = useGetAllProjects();
  console.log("RENDER PROJECT LIST", projects);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </div>
  );
};
