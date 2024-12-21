import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILoginUser, IRegisterUser } from "../../types/authTypes";

axios.defaults.baseURL = "https://openchat-server-4u00.onrender.com/api/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common["Authorization"] = "";
// };

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: IRegisterUser, thunkAPI) => {
    try {
      const response = await axios.post("auth/register", user);
      setAuthHeader(response.data.data.tokens.accessToken);
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to register"
      );
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (user: ILoginUser, thunkAPI) => {
    try {
      const response = await axios.post("auth/login", user);
      setAuthHeader(response.data.data.tokens.accessToken);
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to login"
      );
    }
  }
);
