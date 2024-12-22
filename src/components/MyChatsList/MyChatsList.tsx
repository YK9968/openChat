import { FC } from "react";
import { IChats } from "../../types/chatTypes";
import ChatCard from "../ChatCard/ChatCard";

interface IMyChatsListProps {
  chats: IChats[];
}

const MyChatsList: FC<IMyChatsListProps> = ({ chats }) => {
  return (
    <ul>
      {chats.map((chat) => (
        <li
          className="flex justify-between items-center w-96 bg-white rounded-2xl p-3 mb-4 "
          key={chat.id}
        >
          <ChatCard chat={chat} />
        </li>
      ))}
    </ul>
  );
};

export default MyChatsList;
