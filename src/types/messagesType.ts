export interface Message {
  id: string;
  chatId: string;
  text: string;
  userId: string;
  createdAt: string;
}

export interface IMessagesState {
  messages: Message[];
  isLoadingMsg: boolean;
  isErrorgMsg: boolean;
}
