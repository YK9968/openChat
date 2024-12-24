import { FC, useEffect, useRef } from "react";
import { Message } from "../../types/messagesType";
import { User } from "../../types/authTypes";
import MessageCard from "../MessageCard/MessageCard";

interface IMessageListProps {
  messages: Message[];
  user: User;
}

const MessageList: FC<IMessageListProps> = ({ messages, user }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="h-chatHeight overflow-y-auto  rounded-md p-8 flex flex-col gap-3 custom-scrollbar ">
      {messages.map((message) => (
        <li
          key={message.id}
          className={`flex ${
            user.id === message.userId ? "justify-end" : "justify-start"
          }`}
        >
          <MessageCard message={message} user={user} />
        </li>
      ))}
      <div ref={messagesEndRef} />
    </ul>
  );
};

export default MessageList;
