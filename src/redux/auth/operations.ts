import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IRegisterUser, RegisterUserResponse } from "../../types/types";

axios.defaults.baseURL = "https://openchat-server-4u00.onrender.com/api/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const registerUser = createAsyncThunk<
  RegisterUserResponse,
  IRegisterUser,
  { rejectValue: string }
>("auth/register", async (user: IRegisterUser, thunkAPI) => {
  try {
    const response = await axios.post<RegisterUserResponse>(
      "auth/register",
      user
    );
    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Failed to register"
    );
  }
});
