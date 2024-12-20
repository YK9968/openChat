import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./operations";
import { AuthState } from "../../types/types";

const initialState: AuthState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  authLoading: false,
  authError: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) =>
    builder
      .addCase(registerUser.pending, (state) => {
        state.authLoading = true;
        state.authError = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.authLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        state.token = action.payload.tokens.accessToken;
      })
      .addCase(registerUser.rejected, (state) => {
        state.authLoading = false;
        state.authError = true;
      })
      .addCase(loginUser.pending, (state) => {
        state.authLoading = true;
        state.authError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload.accessToken;
        state.authLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authLoading = false;
        state.authError = true;
      }),
});

export const authReducer = authSlice.reducer;
