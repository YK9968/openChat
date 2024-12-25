import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ILoginUser, IRegisterUser } from "../../types/authTypes";
import { RootState } from "../store";

axios.defaults.baseURL = "http://localhost:4000/api/";

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

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

export const refreshUser = createAsyncThunk(
  "auth/refresh-user",
  async (_, thunkAPI) => {
    const reduxState: RootState = thunkAPI.getState() as RootState;
    const savedTokens: string | null = reduxState.auth.token;
    if (!savedTokens) return;
    setAuthHeader(savedTokens);
    const response = await axios.get("auth/refresh-user", {
      headers: {
        Authorization: `Bearer ${savedTokens}`,
      },
    });
    return response.data.data;
  },
  {
    condition(_, thunkAPI) {
      const reduxState: RootState = thunkAPI.getState() as RootState;
      const savedTokens: string | null = reduxState.auth.token;
      return savedTokens !== null;
    },
  }
);
