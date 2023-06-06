import { useEffect } from "react";

//todo - przednieść do bazy danych !
// subscribe to db
import { useSubscribeToDb } from "../../store/issues/issueModel";

import {
  useAddOneIssue,
  useEditOneIssue,
  useDeleteAllIssues,
} from "../../store/issues/issueSlice";
import {
  useAddOnePlan,
  useClearAllPlans,
  useGetAllPlans,
} from "../../store/plans/plansSlice";
import { useUiContext } from "../../contexts/uiContext";

export const useIssueViewController = () => {
  const { onChooseFile, project } = useUiContext();

  const addOneIssue = useAddOneIssue();
  const editOneIssue = useEditOneIssue();
  const delAllIssues = useDeleteAllIssues();
  useSubscribeToDb(
    "issues",
    { prop: "project", value: project },
    addOneIssue,
    editOneIssue,
    delAllIssues
  );

  const addOnePlan = useAddOnePlan();
  const delAllPlans = useClearAllPlans();
  useSubscribeToDb(
    "plans",
    { prop: "project", value: project },
    addOnePlan,
    () => {},
    delAllPlans
  );

  const firstPlan = useGetAllPlans()[0];
  useEffect(() => {
    if (!onChooseFile) return;
    onChooseFile(firstPlan ? firstPlan.id : null);
  }, [firstPlan, onChooseFile]);
};
