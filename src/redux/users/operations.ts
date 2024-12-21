import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchUsers = createAsyncThunk(
  "user/search-users",
  async (phone: string, thunkAPI) => {
    try {
      const response = await axios.get("user/search-users", {
        params: { phone },
      });

      return response.data.users;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to search"
      );
    }
  }
);
