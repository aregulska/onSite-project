import { useEffect } from "react";

import { useGetAllPlans } from "../../store/plans/plansSlice";
import { useUiContext } from "../../contexts/uiContext";

export const useIssueViewController = () => {
  const { onChooseFile } = useUiContext();
  // console.log("CHECK PROJECT", project);

  const firstPlan = useGetAllPlans()[0];
  useEffect(() => {
    if (!onChooseFile) return;
    onChooseFile(firstPlan ? firstPlan.id : null);
  }, [firstPlan, onChooseFile]);
};
