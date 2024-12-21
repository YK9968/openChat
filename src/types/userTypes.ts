export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface IUserState {
  users: IUser[];
  userLoading: boolean;
  userError: boolean;
}
