import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";

const ChatPage = () => {
  const { id } = useParams();
  const [messages, setMessages] = useState<
    { userId: string; message: string; chatId: string }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState<any>(null);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    const socket = io("https://openchat-server-39rp.onrender.com");
    setSocket(socket);

    socket.emit("join_chat", { chatId: id });

    socket.on(
      "new_message",
      (data: { userId: string; message: string; chatId: string }) => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { userId: data.userId, message: data.message, chatId: data.chatId },
        ]);
      }
    );

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
      <div className="flex">
        <div>
          <input
            className="border py-4 pl-4 w-96 rounded-2xl mr-2"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-rose-500 py-3 px-7 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mb-8 inline-block "
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
        <div className="bg-white rounded-2xl ml-3 w-96 p-3 ">
          {messages.map((message, index) => (
            <div className="max-w-full w-auto mb-8 bg-rose-500 py-3 px-7 border-none rounded-xl">
              <p className=" text-white mb-8 w-3 " key={index}>
                {message.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
