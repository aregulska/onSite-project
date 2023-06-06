import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
} from "react";
/**
 * wybrany projekt
 * wybrany ekran
 * wybrany plik
 * wybrane issue
 * issue filter
 * otwarty kontener plikow
 * otwary kontener issue
 */

interface UiContextProps {
  project: string | null;
  screen: string | null;
  file: string | null;
  issue: string | null;
  filterText: string | null;
  openFile: boolean;
  openIssue: boolean;
  onChangeFilter?: Function;
  onChooseProject?: Function;
  onChooseFile?: Function;
  onChooseIssue?: Function;
  onChangeScreen?: Function;
  onOpenFile?: Function;
  onOpenIssue?: Function;
  onReset?: Function;
}

const uiInitialContext: UiContextProps = {
  project: null,
  screen: "user",
  file: null,
  issue: null,
  filterText: "",
  openFile: false,
  openIssue: false,
};

const UiContext = createContext(uiInitialContext);

export const UiContextProvider = ({ children }: { children: ReactNode }) => {
  const [uiState, setUiState] = useState(uiInitialContext);

  const handleOnChooseProject = useCallback((projectId: string) => {
    console.log("CHANGE CTX: CHOOSE PROJECT", projectId);
    setUiState((prev) => ({ ...prev, project: projectId }));
  }, []);

  const handleOnChooseFile = useCallback((fileId: string) => {
    console.log("CHANGE CTX: CHOOSE FILE", fileId);
    setUiState((prev) => ({ ...prev, file: fileId }));
  }, []);

  const handleOnChooseIssue = useCallback((issueId: string) => {
    console.log("CHANGE CTX: CHOOSE ISSUE", issueId);
    setUiState((prev) => ({ ...prev, issue: issueId }));
  }, []);

  const handleOnChangeFilter = useCallback((filterText: string) => {
    console.log("CHANGE CTX: FILTER ISSUE CONTEXT", filterText);
    setUiState((prev) => ({ ...prev, filterText: filterText }));
  }, []);

  const handleChangeScreen = useCallback((screen: string) => {
    console.log("CHANGE CTX: CHANGE SCREEN", screen);
    setUiState((prev) => ({ ...prev, screen: screen }));
  }, []);

  const handleOpenFile = useCallback((openFile: boolean) => {
    console.log("CHANGE CTX: OPEN FILE CONT", openFile);
    setUiState((prev) => ({ ...prev, openFile: openFile }));
  }, []);

  const handleOpenIssue = useCallback((openIssue: boolean) => {
    console.log("CHANGE CTX: OPEN ISSUE CONT", openIssue);
    setUiState((prev) => ({ ...prev, openIssue: openIssue }));
  }, []);

  const handleResetContext = useCallback(() => {
    console.log("RESET CTX");
    setUiState(uiInitialContext);
  }, []);

  const ctx = {
    ...uiState,
    onChooseProject: handleOnChooseProject,
    onChooseFile: handleOnChooseFile,
    onChooseIssue: handleOnChooseIssue,
    onChangeFilter: handleOnChangeFilter,
    onChangeScreen: handleChangeScreen,
    onOpenFile: handleOpenFile,
    onOpenIssue: handleOpenIssue,
    onReset: handleResetContext,
  };

  return <UiContext.Provider value={ctx}>{children}</UiContext.Provider>;
};

export const useUiContext = () => {
  const ctx = useContext(UiContext);
  if (!ctx) throw Error("No Ui context provider");

  return ctx;
};
