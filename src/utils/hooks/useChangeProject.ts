import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useUiContext } from "../../contexts/uiContext";

import { clearAllProjects } from "../../store/projects/projectsSlice";
import { clearAllIssues } from "../../store/issues/issueSlice";
import { clearAllPlans } from "../../store/plans/plansSlice";

export const useChangeProject = () => {
  const dispatch = useDispatch();
  const { onReset } = useUiContext();
  const navigate = useNavigate();

  return () => {
    console.log("CHANGE PROJECT");
    dispatch(clearAllIssues());
    dispatch(clearAllPlans());
    dispatch(clearAllProjects());

    if (onReset) onReset();
    navigate("/projects");
  };
};
