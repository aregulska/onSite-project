import { useUiContext } from "../../../../contexts/uiContext";
import {
  useGetIssuesForFile,
  useGetOneIssue,
} from "../../../../store/issues/issueSlice";
import { useFilter } from "../../../../utils/hooks/useFilter.ts";

export const useIssueListController = () => {
  const {
    file,
    issue: activeIssueId,
    onChooseIssue: handleChooseIssue,
    filterText,
    onChangeFilter,
    openIssue,
    onOpenIssue,
  } = useUiContext();

  const issues = useGetIssuesForFile(file);
  const activeIssue = useGetOneIssue(activeIssueId);
  const filteredIssues = useFilter(filterText, issues, ["title", "status"]);

  function handleChangeFitler(filterText) {
    onChangeFilter(filterText);
  }
  function handleClearFitler() {
    onChangeFilter("");
  }

  return {
    activeIssueId,
    activeIssue,
    filterText,
    filteredIssues,
    openIssue,
    onOpenIssue,
    handleChooseIssue,
    handleChangeFitler,
    handleClearFitler,
  };
};
