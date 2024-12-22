import { FC } from "react";
import { IChats } from "../../types/chatTypes";
import { useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";

interface IChatCardProps {
  chat: IChats;
}

const ChatCard: FC<IChatCardProps> = ({ chat }) => {
  const user = useAppSelector(selectUser);

  const chooseCorrectUserName = () => {
    if (chat.user1.id === user.id) {
      return chat.user2.name;
    }
    return chat.user1.name;
  };

  return (
    <>
      <button className="bg-rose-500 py-3 px-7 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white ">
        Go to chat
      </button>
      <p>
        Chat with:<strong>{chooseCorrectUserName()}</strong>
      </p>
    </>
  );
};

export default ChatCard;