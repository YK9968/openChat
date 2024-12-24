import { FC } from "react";
import { Message } from "../../types/messagesType";
import { User } from "../../types/authTypes";

interface IMessageCardProps {
  message: Message;
  user: User;
}

const MessageCard: FC<IMessageCardProps> = ({ message, user }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="flex flex-col gap-1 justify-end">
      <p
        className={`max-w-full w-96 py-3 px-7 border-none rounded-xl ${
          user.id === message.userId
            ? "bg-rose-500 text-white"
            : "bg-white text-black"
        } break-words`}
      >
        {message.message}
      </p>
      <p className="text-black opacity-55">{formatDate(message.createdAt)}</p>
    </div>
  );
};

export default MessageCard;
