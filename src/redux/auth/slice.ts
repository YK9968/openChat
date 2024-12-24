import { createSlice } from "@reduxjs/toolkit";
import { loginUser, refreshUser, registerUser } from "./operations";
import { AuthState } from "../../types/authTypes";

const initialState: AuthState = {
  user: {
    id: null,
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
  reducers: {
    logOut(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.user = { id: null, name: null, email: null };
    },
  },

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
        state.user = action.payload.userinfo;
        state.token = action.payload.tokens.accessToken;
        state.authLoading = false;
      })
      .addCase(loginUser.rejected, (state) => {
        state.authLoading = false;
        state.authError = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
