import { useCallback, useState } from "react";

// TODO: to jest do typesript = definiowanie modelu danych (Type ORM?)
import { issueAddProperties } from "../../../../store/issues/issuesMeta";
import { initialIssue } from "../../../../store/issues/issuesMeta";

// TODO: initial state z innego miejsca
import { useUiContext } from "../../../../contexts/uiContext";
import { useGetMaxNumber } from "../../../../store/issues/issueSlice";
import { addIssueToDb as handleAddIssueToDb } from "../../../../store/issues/issueModel";

export const useIssueViewerController = () => {
  // SCALE
  const [scale, setScale] = useState(1.0);

  const handleScaleDown = () => {
    setScale((s) => s - 0.3);
  };
  const handleScaleUp = () => {
    setScale((s) => s + 0.3);
  };

  // RESIZE
  //TODO: ogarnąć wartośc startową
  const INITIAL_WIDTH = window.innerWidth - 60;
  const [pdfWidth, setPdfWidth] = useState(INITIAL_WIDTH);
  const handleChangePdfWidth = useCallback((width) => {
    setPdfWidth(width);
  }, []);

  // INITIAL ISSUE DATA
  const { file, project } = useUiContext();
  const no = useGetMaxNumber();
  const issueAddInitialData = {
    ...initialIssue,
    plan: file,
    project: project,
    no: no,
  };

  //żeby updatował sie initial issue state w AddCont
  const key = file + no;

  return {
    scale,
    pdfWidth,
    handleChangePdfWidth,
    handleScaleDown,
    handleScaleUp,
    issueAddInitialData,
    handleAddIssueToDb,
    issueAddProperties,
    key,
  };
};
