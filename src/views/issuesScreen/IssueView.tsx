import React from "react";

import { IssueList } from "./containers/issueList/IssueList";
import { FilesList } from "./containers/filesList/FilesList";
import { IssueViewer } from "./containers/issueViewer/IssueViewer";

import { useIssueViewController } from "./useIssueViewController";

// import { useIssueViewController } from "./useIssueViewController";
// CEL KOMPONENTU - subskrypcja do reduxa i db oraz rendorowanie komponentów - stan ich otwarcia
export const IssueView = () => {
  // TODO: będzie zwracało stan ładowania danych - użyć go
  console.log("RENDER ISSUE SCREEN");
  useIssueViewController();

  return (
    <div className="issues-view">
      <div className="view-layer">{true && <IssueViewer />}</div>
      <div className="tables-layer">
        {true && <IssueList />}
        {true && <FilesList />}
      </div>
    </div>
  );
};
