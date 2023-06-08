import { useState } from "react";

import { useUiContext } from "../../../../contexts/uiContext";
import { useGetAllPlansForProject } from "../../../../store/plans/plansSlice";
import { useChangeFile } from "../../../../utils/hooks/useChangeFile";
import { useFilter } from "../../../../utils/hooks/useFilter.ts";

export const useFilesListController = () => {
  const [filterText, setFilterText] = useState("");

  const handleChangeFilter = (e) => {
    setFilterText(e.target.value);
  };
  const handleClearFilter = () => {
    setFilterText("");
  };
  const {
    file: activeFileId,
    project: projectId,
    openFile,
    onOpenFile,
  } = useUiContext();
  const handleChangeFile = useChangeFile();

  const plans = useGetAllPlansForProject(projectId);
  const plansFiltered = useFilter(filterText, plans, ["title"]);
  //console.log("FILES LIST", plans, plansFiltered);

  return {
    activeFileId,
    plansFiltered,
    filterText,
    openFile,
    onOpenFile,
    handleChangeFilter,
    handleClearFilter,
    handleChangeFile,
  };
};
