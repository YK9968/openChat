import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./operations";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    authLoading: false,
    authError: false,
  },

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
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state) => {
        state.authLoading = false;
        state.authError = true;
      }),
});

export const authReducer = authSlice.reducer;
