// types.ts
export interface User {
  name: string | null;
  email: string | null;
}

export interface AuthState {
  user: User;
  token: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface RootState {
  auth: AuthState;
}

export interface IRegisterUser {
  name: string;
  phone: string;
  email: string;
  password: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface RegisterUserResponse {
  status: number;
  message: string;
  data: {
    user: User;
    tokens: Tokens;
  };
}
