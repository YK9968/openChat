import { RootState } from "../../types/authTypes";

export const selectMessages = (state: RootState) => state.messages.messages;
export const selectIsLoadingMsg = (state: RootState) =>
  state.messages.isLoadingMsg;
