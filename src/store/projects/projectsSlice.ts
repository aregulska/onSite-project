import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { Project } from "./projectsMeta";

const initialState: Project[] = [];

const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    projectAdded: (state: Project[], action: PayloadAction<Project>) => {
      // //console.log("ADD PROJECT TO STORE", action.payload);
      let newProject = action.payload;
      state.push(newProject);
    },
    clearAllProjects: () => {
      // //console.log("CLEAR ALL PROJECTS");
      return [];
    },
  },
});

// PROJECT MODEL
export const useGetAllProjects = () => {
  return useSelector((state: RootState) => state.projects);
};

export const useGetOneProject = (id: string | null) => {
  return useSelector((state: RootState) => {
    if (!id) return null;
    return state.projects.find((project: Project) => project.id === id);
  });
};

export const useAddOneProject = () => {
  const dispatch = useDispatch();
  return (newProject: Project) => dispatch(projectAdded(newProject));
};

export default projectsSlice.reducer;

export const { projectAdded, clearAllProjects } = projectsSlice.actions;
