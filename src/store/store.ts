import { configureStore } from "@reduxjs/toolkit";
import issueReducer from "./issues/issueSlice";
import userReducer from "./users/usersSlice";
import planReducer from "./plans/plansSlice";
import projectReducer from "./projects/projectsSlice";
import { apiSlice } from "./api/apiSlice";
//import { pokemonApi } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    issues: issueReducer,
    users: userReducer,
    plans: planReducer,
    projects: projectReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  /*     middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware), */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
