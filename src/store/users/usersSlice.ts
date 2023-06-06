import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";

import { User } from "./usersMeta";

const initialUserState: User[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    clearAllUsers: () => {
      // console.log("CLEAR ALL USERS");
      return [];
    },
    userAdded: (state, action: PayloadAction<User>) => {
      // console.log("ADD USER TO STORE", action.payload);
      let newUser = action.payload;
      state.push(newUser);
    },
  },
});

export const useAllUsers = () => {
  return useSelector((state: RootState) => state.users);
};

export const useOneUser = (id: string) => {
  const users = useAllUsers();
  return users.find((user) => user.id === id);
};

export const useAddOneUser = () => {
  const dispatch = useDispatch();
  return (newUser: User) => dispatch(userAdded(newUser));
};

export const { clearAllUsers, userAdded } = usersSlice.actions;

export default usersSlice.reducer;
