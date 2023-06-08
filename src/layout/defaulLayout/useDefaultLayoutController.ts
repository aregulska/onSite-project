import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUiContext } from "../../contexts/uiContext";
import { useSubscribeToDb } from "../../store/issues/issueModel";

import {
  useAddOneIssue,
  useEditOneIssue,
  useDeleteAllIssues,
} from "../../store/issues/issueSlice";
import { useAddOnePlan, useClearAllPlans } from "../../store/plans/plansSlice";
export const useDefaultLayoutController = () => {
  const { onChooseProject } = useUiContext();
  const { projectId } = useParams();

  const addOneIssue = useAddOneIssue();
  const editOneIssue = useEditOneIssue();
  const delAllIssues = useDeleteAllIssues();

  useSubscribeToDb(
    "issues",
    { prop: "project", value: projectId },
    addOneIssue,
    editOneIssue,
    delAllIssues
  );

  const addOnePlan = useAddOnePlan();
  const delAllPlans = useClearAllPlans();
  useSubscribeToDb(
    "plans",
    { prop: "project", value: projectId },
    addOnePlan,
    () => {},
    delAllPlans
  );

  useEffect(() => {
    // console.log("DEFAULT LAYOUT RENDER ON CHOOSE PROJECT", projectId);
    if (onChooseProject) onChooseProject(projectId);
  }, [projectId, onChooseProject]);
};
