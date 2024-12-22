import { RootState } from "../../types/authTypes";

export const selectChats = (state: RootState) => state.chats.chats;
export const selectIsLoaderChats = (state: RootState) =>
  state.chats.isLoaderChats;

export const selectIsErrorChats = (state: RootState) =>
  state.chats.isErrorChats;
