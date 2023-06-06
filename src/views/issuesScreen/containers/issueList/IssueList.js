import { DataCont } from "../../../../components/containers/dataCont/DataCont";

import { useIssueListController } from "./useIssueListController";

// CEL KONTROLKI: przekazać propsy do DataCont
export const IssueList = () => {
  console.log("RENDER ISSUE LIST");

  const {
    activeIssueId,
    activeIssue,
    filterText,
    filteredIssues,
    openIssue,
    onOpenIssue,
    handleChooseIssue,
    handleChangeFitler,
    handleClearFitler,
  } = useIssueListController();

  const title = activeIssueId ? `Chosen issue: ${activeIssue.title}` : "Issues";

  return (
    <DataCont
      title={title}
      pos="right"
      open={openIssue}
      toggleOpen={onOpenIssue}
      details={true}
      data={filteredIssues}
      activeItemId={activeIssueId}
      onChooseItem={handleChooseIssue}
      filter={filterText}
      onChangeFilter={handleChangeFitler}
      onClearFilter={handleClearFitler}
    />
  );
};
