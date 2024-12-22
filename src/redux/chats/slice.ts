import { createSlice } from "@reduxjs/toolkit";
import { IChatsState } from "../../types/chatTypes";
import { getUserChats, startChat } from "./operations";

const initialState: IChatsState = {
  chats: [],
  isLoaderChats: false,
  isErrorChats: false,
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder

      .addCase(startChat.pending, (state) => {
        state.isLoaderChats = true;
        state.isErrorChats = false;
      })
      .addCase(startChat.fulfilled, (state) => {
        state.isLoaderChats = false;
      })
      .addCase(startChat.rejected, (state) => {
        state.isLoaderChats = false;
        state.isErrorChats = true;
      })
      .addCase(getUserChats.pending, (state) => {
        state.isLoaderChats = true;
        state.isErrorChats = false;
      })
      .addCase(getUserChats.fulfilled, (state, action) => {
        state.isLoaderChats = false;
        state.chats = action.payload;
      })
      .addCase(getUserChats.rejected, (state) => {
        state.isLoaderChats = false;
        state.isErrorChats = true;
      });
  },
});

export const chatsReducer = chatsSlice.reducer;
