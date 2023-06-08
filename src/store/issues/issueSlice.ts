import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

import { Issue } from "./issuesMeta";
import { RootState } from "../store";

const initialIssuesState: Issue[] = [];

const issueSlice = createSlice({
  name: "issues",
  initialState: initialIssuesState,
  reducers: {
    clearAllIssues: () => {
      // //console.log("CLEAR ALL ISSUES");
      return [];
    },
    issueAdded: (state, action: PayloadAction<Issue>) => {
      // //console.log("ADD ISSUE TO STORE", action.payload);
      let newIssue = action.payload;
      state.push(newIssue);
    },
    issueEdited: (state, action: PayloadAction<Issue>) => {
      const changedElement = action.payload;
      // //console.log("ISSUE EDITED IN REDUX", changedElement);
      const index = state.findIndex((el) => el.id === changedElement.id);
      state[index] = changedElement;
    },
  },
});

// SELEKTORS
export const useGetAllIssues = () => {
  return useSelector((state: RootState) => state.issues);
};

export const useGetOneIssue = (id: string | null) => {
  return useSelector((state: RootState) => {
    if (!id) return null;
    return state.issues.find((issue) => issue.id === id);
  });
};

export const useGetMaxNumber = () => {
  const issues = useGetAllIssues();
  const max = Math.max(...issues.map((issue) => Number(issue.no))) + 1;
  // //console.log("USE MAX NUMBER", issues, max);
  return issues.length === 0 ? 1 : max;
};

export const useGetIssuesForFile = (planId: string) => {
  const issues = useGetAllIssues();
  return issues.filter((issue) => issue.plan === planId);
};

// ACTIONS
export const useAddOneIssue = () => {
  const dispatch = useDispatch();
  return (issue: Issue) => dispatch(issueAdded(issue));
};

export const useEditOneIssue = () => {
  const dispatch = useDispatch();
  return (issue: Issue) => dispatch(issueEdited(issue));
};
export const useDeleteAllIssues = () => {
  const dispatch = useDispatch();
  return () => dispatch(clearAllIssues());
};

export default issueSlice.reducer;

export const { issueAdded, issueEdited, clearAllIssues } = issueSlice.actions;
