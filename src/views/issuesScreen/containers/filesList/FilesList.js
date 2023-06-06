import { DataCont } from "../../../../components/containers/dataCont/DataCont";

import { useFilesListController } from "./useFilesListController";

export const FilesList = () => {
  console.log("RENDER FILES LIST");

  const {
    activeFileId,
    plansFiltered,
    filterText,
    openFile,
    onOpenFile,
    handleChangeFilter,
    handleClearFilter,
    handleChangeFile,
  } = useFilesListController();

  return (
    <DataCont
      title="Plans"
      pos="left"
      open={openFile}
      toggleOpen={onOpenFile}
      details={false}
      data={plansFiltered}
      activeItemId={activeFileId}
      filter={filterText}
      onChangeFilter={handleChangeFilter}
      onClearFilter={handleClearFilter}
      onChooseItem={handleChangeFile}
    />
  );
};
