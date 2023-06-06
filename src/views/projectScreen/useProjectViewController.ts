import { useAddOneProject } from "../../store/projects/projectsSlice";
import { useAddOneUser } from "../../store/users/usersSlice";
import { useSubscribeToDb } from "../../store/issues/issueModel";

// KONTROLER: subskrypcja do bazy danych

export const useProjectViewController = () => {
  const addProjectToStore = useAddOneProject();

  const { loading: loadingProjects } = useSubscribeToDb(
    "projects",
    null,
    addProjectToStore,
    () => {},
    () => {}
  );
  const addUserToStore = useAddOneUser();

  const { loading: loadingIssues } = useSubscribeToDb(
    "users",
    null,
    addUserToStore,
    () => {},
    () => {}
  );

  return { loadingIssues, loadingProjects };
};
