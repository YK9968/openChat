import { RootState } from "../../types/authTypes";

export const selectUsers = (state: RootState) => state.users.users;
export const selectIsLoadingUser = (state: RootState) =>
  state.users.userLoading;
