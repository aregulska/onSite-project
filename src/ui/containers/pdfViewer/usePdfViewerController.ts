import { useState, useRef, useEffect } from "react";

import { useUiContext } from "../../../contexts/uiContext";
import { useGetOnePlan } from "../../../store/plans/plansSlice";
import { dragAndDrop } from "../../../utils/functions/dragAndDrop";

export const usePdfViewerController = (handleChangePdfWidth: Function) => {
  // KTÓRY PLIK
  const { file: activeFileId } = useUiContext();
  const activeFile = useGetOnePlan(activeFileId);

  // ŁADOWANIE
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }

  // DRAG AND DROP
  const [viewerDragged, setViewerDragged] = useState(false);
  const [viewerPos, setViewerPos] = useState({ left: 0, top: 0 });
  const viewerRef = useRef<HTMLDivElement>(null);
  let viewerStyle = { top: viewerPos.top + "px", left: viewerPos.left + "px" };

  const changePos = (left: number, top: number) => {
    setViewerPos({ ...setViewerPos, left: left, top: top });
  };

  useEffect(() => {
    let view = viewerRef.current;
    const startDrag = (e: MouseEvent) => {
      //console.log('START drag view', e.target, view);
      const target = e.target as Element;
      if (target.classList.contains("react-pdf__Page__canvas") && view) {
        dragAndDrop(e, {
          setDraggedState: setViewerDragged,
          setPos: changePos,
          element: view,
          scale: 1,
          reset: false,
        });
      }
    };
    view?.addEventListener("mousedown", startDrag);
    return () => {
      view?.removeEventListener("mousedown", startDrag);
    };
  }, []);

  // RESIZE
  useEffect(() => {
    const handleResize = () => {
      let width = viewerRef.current?.offsetWidth;
      handleChangePdfWidth(width);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleChangePdfWidth]);

  return {
    activeFile,
    onDocumentLoadSuccess,
    pageNumber,
    viewerRef,
    viewerDragged,
    viewerPos,
    viewerStyle,
  };
};
