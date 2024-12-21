import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../types/userTypes";
import { searchUsers } from "./operations";

const initialState: IUserState = {
  users: [],
  userLoading: false,
  userError: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(searchUsers.pending, (state) => {
        state.userError = false;
        state.userLoading = true;
      })
      .addCase(searchUsers.fulfilled, (state, action) => {
        state.userLoading = false;
        state.users = action.payload;
      })
      .addCase(searchUsers.rejected, (state) => {
        state.userError = true;
        state.userLoading = false;
      }),
});

export const userReducer = userSlice.reducer;
