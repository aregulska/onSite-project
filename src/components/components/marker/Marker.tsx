import React from "react";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import { useMarkerController } from "./useMarkerController";

import { Issue } from "../../../store/issues/issuesMeta";

// CEL KOMPONENTU: wyświetlenie markera i jego tooltipa
// TODO - ogarniczanie drag and dropa do obszaru mapy

const MarkerTooltip = ({
  issue,
  position,
}: {
  issue: Issue;
  position: { left: string; top: string };
}) => {
  let top = parseInt(position.top);
  let left = parseInt(position.left);

  const pdfViewerCoorde = document
    ?.getElementById("pdf-viewer")
    ?.getBoundingClientRect();
  const viewerPositionLeft = pdfViewerCoorde ? pdfViewerCoorde.left : 0;
  const viewerPositionWidth = pdfViewerCoorde ? pdfViewerCoorde.width : 1000;
  const maxRight = viewerPositionWidth - viewerPositionLeft - 230;

  const tooltipStyle = {
    left: left < maxRight ? "36px" : 72 - (left - maxRight) + "px",
    top: top < 230 ? `${-230 + top}px` : `${-230}px`,
  };

  return (
    <div className="marker-tooltip" style={tooltipStyle}>
      <div className="marker-tooltip__photo">
        {issue.photoUrl ? (
          <img src={issue.photoUrl} alt=""></img>
        ) : (
          <InsertPhotoIcon sx={{ fontSize: "100px" }} />
        )}
      </div>
      <div className="marker-tooltip__title">{issue.title}</div>
    </div>
  );
};

const MarkerIcon = ({
  issue,
  className,
}: {
  issue: Issue;
  className: string;
}) => {
  return <div className={className}>{issue.no}</div>;
};

export const Marker = ({ issue, scale }: { issue: Issue; scale: number }) => {
  const {
    markerRef,
    markerClass,
    markerIconClass,
    styleMarker,
    handleStartDrag,
    handleEnter,
    handleMarkerClick,
  } = useMarkerController(issue, scale);

  return (
    <div
      className={markerClass}
      style={styleMarker}
      ref={markerRef}
      onMouseDown={handleStartDrag}
      onMouseEnter={handleEnter}
      onClick={handleMarkerClick}
    >
      <MarkerIcon issue={issue} className={markerIconClass} />
      <MarkerTooltip issue={issue} position={styleMarker} />
    </div>
  );
};
