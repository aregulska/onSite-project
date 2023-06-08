import { useAddOneProject } from "./store/projects/projectsSlice";
import { useAddOneUser } from "./store/users/usersSlice";
import { useSubscribeToDb } from "./store/issues/issueModel";

// KONTROLER: subskrypcja do bazy danych

export const useAppViewController = () => {
  console.log("APP CONTROLLER");
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
