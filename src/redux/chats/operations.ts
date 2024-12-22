import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IStartChat } from "../../types/chatTypes";

export const startChat = createAsyncThunk(
  "user/chats",
  async (users: IStartChat, thunkAPI) => {
    try {
      const response = await axios.post("chat", users);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to chat"
      );
    }
  }
);

export const getUserChats = createAsyncThunk(
  "get/user-chats",
  async (userId: string | null, thunkAPI) => {
    try {
      const response = await axios.get("chat/user-chats", {
        params: { id: userId },
      });

      return response.data.chats;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to chat"
      );
    }
  }
);
