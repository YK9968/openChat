import { PersistPartial } from "redux-persist/es/persistReducer";
import { IUserState } from "./userTypes";

export interface User {
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
