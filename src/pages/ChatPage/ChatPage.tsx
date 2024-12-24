import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";
import { Message } from "../../types/messagesType";
import MessageList from "../../components/MessageList/MessageList";
import SendBar from "../../components/SendBar/SendBar";
import { getAllMessages } from "../../redux/messages/operations";
import { selectMessages } from "../../redux/messages/selectors";
import {
  addMessages,
  deleteMessages,
  updateMessages,
} from "../../redux/messages/slice";

const ChatPage = () => {
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState<any>(null);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const msg = useAppSelector(selectMessages);

  useEffect(() => {
    if (!id) return;
    const socket = io("https://openchat-server-39rp.onrender.com");
    setSocket(socket);
    dispatch(getAllMessages(id));
    socket.emit("join_chat", { chatId: id });

    socket.on("new_message", (data: Message) => {
      dispatch(addMessages(data));
    });

    socket.on("message_updated", (updatedMessage: Message) => {
      dispatch(updateMessages(updatedMessage));
    });

    socket.on("message_deleted", (messageId: string) => {
      dispatch(deleteMessages(messageId));
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  const updateMessage = (messageId: string, newMessage: string) => {
    socket.emit("update_message", { messageId, newMessage });
  };

  const deleteMessage = (messageId: string) => {
    socket.emit("delete_message", { messageId });
  };

  const sendMessage = () => {
    if (newMessage.trim()) {
      socket.emit("send_message", {
        chatId: id,
        text: newMessage,
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
        <MessageList
          messages={msg}
          user={user}
          deleteMessage={deleteMessage}
          updateMessage={updateMessage}
        />
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
