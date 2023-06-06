import { useUiContext } from "../../contexts/uiContext";

// TODO dodać resetowanie układu odniesienia - pewnie będize w kontekście
export const useChangeFile = () => {
  const { onChooseIssue, onChooseFile } = useUiContext();

  return (fileId: string) => {
    if (onChooseIssue) onChooseIssue(null);
    if (onChooseFile) onChooseFile(fileId);
  };
};
