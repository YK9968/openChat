import { createSlice } from "@reduxjs/toolkit";
import { IMessagesState } from "../../types/messagesType";
import { getAllMessages } from "./operations";

const initialState: IMessagesState = {
  messages: [],
  isLoadingMsg: false,
  isErrorgMsg: false,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessages(state, action) {
      state.messages.push(action.payload);
    },
    updateMessages(state, action) {
      state.messages = state.messages.map((msg) =>
        msg.id === action.payload.id ? action.payload : msg
      );
    },
    deleteMessages(state, action) {
      state.messages = state.messages.filter(
        (msg) => msg.id !== action.payload
      );
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getAllMessages.pending, (state) => {
        state.isLoadingMsg = true;
        state.isErrorgMsg = false;
      })
      .addCase(getAllMessages.fulfilled, (state, action) => {
        state.isLoadingMsg = false;
        state.messages = action.payload;
      })
      .addCase(getAllMessages.rejected, (state) => {
        state.isLoadingMsg = false;
        state.isErrorgMsg = true;
      });
  },
});

export const mesagesReducer = messagesSlice.reducer;
export const { addMessages, updateMessages, deleteMessages } =
  messagesSlice.actions;
