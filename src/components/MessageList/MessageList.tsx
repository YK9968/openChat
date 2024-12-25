import { FC, useEffect, useRef, useState } from "react";
import { Message } from "../../types/messagesType";
import { User } from "../../types/authTypes";
import MessageCard from "../MessageCard/MessageCard";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import EditMsgModal from "../EditMsgModal/EditMsgModal";
import Modal from "react-modal";
import { styles, overlay } from "../../types/modalStyles/styles";

interface IMessageListProps {
  messages: Message[];
  user: User;
  deleteMessage: (id: string, chatId: string) => void;
  updateMessage: (id: string, text: string, chatId: string) => void;
}

const MessageList: FC<IMessageListProps> = ({
  messages,
  user,
  deleteMessage,
  updateMessage,
}) => {
  Modal.setAppElement("#root");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [isOpenEditModal, setIsOpenEditModal] = useState<string | null>(null);

  const toggleEditModal = (id: string) => {
    setIsOpenEditModal(id === isOpenEditModal ? null : id);
  };

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
          className={`flex  items-start gap-2 ${
            user.id === message.userId ? "justify-end" : "justify-start"
          }`}
        >
          <MessageCard message={message} user={user} />
          {user.id === message.userId && (
            <div className="flex flex-col mt-1">
              <button onClick={() => deleteMessage(message.id, message.chatId)}>
                <MdDeleteOutline className="w-5 h-5 hover:text-rose-600 transition-all duration-150 ease-in-out" />
              </button>
              <button onClick={() => toggleEditModal(message.id)}>
                <MdOutlineEdit className="w-5 h-5 hover:text-rose-600 transition-all duration-150 ease-in-out" />
              </button>
            </div>
          )}
          <Modal
            style={{
              content: {
                width: "500px",
                position: "relative",
                ...styles,
              },
              overlay,
            }}
            isOpen={isOpenEditModal === message.id}
            onRequestClose={() => setIsOpenEditModal(null)}
          >
            <button
              onClick={() => setIsOpenEditModal(null)}
              className="absolute right-7 top-7 "
            >
              <IoCloseOutline className="w-8 h-8" />
            </button>
            <EditMsgModal
              toggleForm={() => setIsOpenEditModal(null)}
              msg={message}
              updateMessage={updateMessage}
            />
          </Modal>
        </li>
      ))}
      <div ref={messagesEndRef} />
    </ul>
  );
};

export default MessageList;
