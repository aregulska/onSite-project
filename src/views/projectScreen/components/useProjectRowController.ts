import { useNavigate } from "react-router-dom";

import { useUiContext } from "../../../contexts/uiContext";

export const useProjectRowController = () => {
  const navigate = useNavigate();
  const { onChooseProject } = useUiContext();

  function handleChooseProject(projectId: string) {
    console.log("CONTROLLER: CHOOSE PROJECT");
    if (!onChooseProject) return;
    onChooseProject(projectId);
    navigate(`/project/${projectId}/issues`);
  }

  return { handleChooseProject };
};
