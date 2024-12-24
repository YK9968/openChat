import { PersistPartial } from "redux-persist/es/persistReducer";
import { IUserState } from "./userTypes";
import { IChatsState } from "./chatTypes";
import { IMessagesState } from "./messagesType";

export interface User {
  id: string | null;
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  authLoading: boolean;
  authError: boolean;
}

export interface RootState {
  auth: AuthState & PersistPartial;
  users: IUserState;
  chats: IChatsState;
  messages: IMessagesState;
}

export interface IRegisterUser {
  name: string;
  phone: string;
  email: string;
  password: string;
}
export interface ILoginUser {
  email: string;
  password: string;
}
