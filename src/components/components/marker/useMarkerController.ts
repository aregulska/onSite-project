import { useState, useRef } from "react";
import classNames from "classnames";

import { dragAndDrop } from "../../../utils/functions/dragAndDrop";
import { useUiContext } from "../../../contexts/uiContext";
import { editIssueInDb } from "../../../store/issues/issueModel";

import { Issue } from "../../../store/issues/issuesMeta";

export const useMarkerController = (issue: Issue, scale: number) => {
  const [isDragged, setIsDragged] = useState(false);
  const [tooltipHover, setTooltipHover] = useState(false);

  // AKCJA WYBORU ISSUE
  const { onChooseIssue, onOpenIssue, issue: activeIssueId } = useUiContext();
  const handleMarkerClick = () => {
    if (onChooseIssue) onChooseIssue(issue.id);
    if (onOpenIssue) onOpenIssue(true);
  };

  // ZMIANA POZYCJI MARKERA I EDYCJA ISSUE
  const markerRef = useRef<HTMLDivElement>(null);
  const [markerPosition, setMarkerPosition] = useState({
    left: issue.marker_position.left,
    top: issue.marker_position.top,
  });

  const changeMarkerPosition = (left: number, top: number) => {
    console.log("changeMarkerPosition", left, top);
    setMarkerPosition({ left: left, top: top });
  };

  const handleChangeIssuePosition = (left: number, top: number) => {
    editIssueInDb(issue.id, {
      marker_position: { left: left, top: top },
    });
  };

  const handleStartDrag = (e: MouseEvent) => {
    //console.log('start drag marker');
    e.preventDefault();
    if (activeMarker) {
      let marker = markerRef.current;
      if (!marker) return;
      dragAndDrop(e, {
        setDraggedState: setIsDragged,
        setPos: changeMarkerPosition,
        element: marker,
        scale: scale,
        contScale: scale,
        reset: false,
        dropAction: handleChangeIssuePosition,
      });
    }
  };

  //WYŚWIETLENIE TOOLTIP
  const handleEnter = () => {
    let marker = markerRef.current;
    if (marker) {
      let hoverTimeout = setTimeout(() => {
        setTooltipHover(true);
      }, 600);

      const handleLeave = () => {
        clearTimeout(hoverTimeout);
        setTooltipHover(false);
        if (marker) marker.removeEventListener("mouseleave", handleLeave);
      };
      if (marker) marker.addEventListener("mouseleave", handleLeave);
    }
  };

  // KLASY I STYL MARKERA
  let activeMarker = activeIssueId ? issue.id === activeIssueId : true;

  let markerClass = classNames({
    marker: true,
    disabled: !activeMarker,
    dragged: isDragged,
    hovered: tooltipHover,
  });

  let markerIconClass = classNames({
    markerIcon: true,
    disabled: !activeMarker,
    dragged: isDragged,
    hovered: tooltipHover,
  });

  let styleMarker = {
    left: markerPosition.left * scale + "px",
    top: markerPosition.top * scale + "px",
  };

  return {
    markerRef,
    markerClass,
    markerIconClass,
    styleMarker,
    handleStartDrag,
    handleEnter,
    handleMarkerClick,
  };
};
