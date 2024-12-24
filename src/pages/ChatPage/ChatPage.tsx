import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";
import { Message } from "../../types/messagesType";
import MessageList from "../../components/MessageList/MessageList";
import SendBar from "../../components/SendBar/SendBar";

const ChatPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState<any>(null);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const socket = io("http://localhost:4000");
    setSocket(socket);

    socket.emit("join_chat", { chatId: id });

    socket.on("new_message", (data: Message) => {
      const { userId, message, chatId, createdAt } = data;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          userId,
          message,
          chatId,
          id: data.id,
          createdAt,
        },
      ]);
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      socket.emit("send_message", {
        chatId: id,
        message: newMessage,
        userId: user.id,
      });
      setNewMessage("");
    }
  };

  return (
    <div>
      <Link
        className="bg-rose-500 py-3 px-7 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mb-8 inline-block "
        to="/user-chats"
      >
        Go back
      </Link>
      <div>
        <MessageList messages={messages} user={user} />
        <SendBar
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default ChatPage;
