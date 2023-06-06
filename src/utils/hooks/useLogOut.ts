import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useUiContext } from "../../contexts/uiContext";

import { clearAllProjects } from "../../store/projects/projectsSlice";
import { clearAllUsers } from "../../store/users/usersSlice";
import { clearAllIssues } from "../../store/issues/issueSlice";
import { clearAllPlans } from "../../store/plans/plansSlice";

import { signOutUser } from "../../environments/firebase/firebase-auth";

export const useLogOut = () => {
  const dispatch = useDispatch();
  const { onReset } = useUiContext();
  const navigate = useNavigate();

  return () => {
    console.log("LOG OUT");
    dispatch(clearAllUsers());
    dispatch(clearAllProjects());
    dispatch(clearAllIssues());
    dispatch(clearAllPlans());
    if (onReset) onReset();
    navigate("/");
    signOutUser();
  };
};
