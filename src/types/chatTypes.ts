import { IUser } from "./userTypes";

export interface IStartChat {
  user1: string | null;
  user2: string | null;
}

export interface IChats {
  id: string;
  createdAt: string;
  userId1: string;
  userId2: string;
  user1: IUser;
  user2: IUser;
}

export interface IChatsState {
  chats: IChats[];
  isLoaderChats: boolean;
  isErrorChats: boolean;
}
