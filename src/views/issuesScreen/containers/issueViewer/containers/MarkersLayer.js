import React from "react";

import { useGetIssuesForFile } from "../../../../../store/issues/issueSlice";
import { useFilter } from "../../../../../utils/hooks/useFilter.ts";
import { useUiContext } from "../../../../../contexts/uiContext";

import { Marker } from "../../../../../components/components/marker/Marker";

// CEL KOMPONENTU: wyświetlenie markerów na PDF

export const MarkersLayer = ({ scale }) => {
  console.log("RENDER MARKERS LAYER");
  const {
    file,
    issue: activeIssueId,
    onChooseIssue: setActiveIssueId,
  } = useUiContext();

  const issuesForFile = useGetIssuesForFile(file);
  const filteredIssues = useFilter("", issuesForFile, ["title", "status"]);

  return (
    <React.Fragment>
      {filteredIssues?.map((issue) => (
        <Marker
          key={issue.id}
          issue={issue}
          activeIssueId={activeIssueId}
          setActiveIssueId={setActiveIssueId}
          scale={scale}
        />
      ))}
    </React.Fragment>
  );
};
