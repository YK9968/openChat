import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllMessages = createAsyncThunk(
  "get/mesages",
  async (chatId: string, thunkAPI) => {
    try {
      const response = await axios.get(`chat/${chatId}/messages`);
      return response.data.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to find messages"
      );
    }
  }
);
