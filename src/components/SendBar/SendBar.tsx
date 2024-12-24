import { FC } from "react";

interface ISendBarProps {
  newMessage: string;
  setNewMessage: (message: string) => void;
  sendMessage: () => void;
}

const SendBar: FC<ISendBarProps> = ({
  newMessage,
  setNewMessage,
  sendMessage,
}) => {
  return (
    <div className="fixed bottom-6 left-0 w-full flex justify-center">
      <div className="flex items-center">
        <input
          className="border py-4 pl-4 w-findUsersListWidth rounded-2xl mr-2"
          type="text"
          value={newMessage}
          placeholder="Message"
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-rose-500 py-3 px-7 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default SendBar;
