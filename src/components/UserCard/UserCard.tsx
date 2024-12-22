import { FC } from "react";
import { IUser } from "../../types/userTypes";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";
import { getUserChats, startChat } from "../../redux/chats/operations";

interface IUserCardProps {
  user: IUser;
}

const UserCard: FC<IUserCardProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const currentUserId = useAppSelector(selectUser);

  const handleChat = async () => {
    try {
      await dispatch(
        startChat({ user1: currentUserId.id, user2: user.id })
      ).unwrap();

      dispatch(getUserChats(currentUserId.id));
    } catch (error) {
      console.error("Error starting chat:", error);
    }
  };

  return (
    <>
      <p>{user.name}</p>
      <p className="mb-2">{user.phone}</p>
      <button
        onClick={handleChat}
        className="bg-rose-500 py-3 px-7 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white "
      >
        Go to chat
      </button>
    </>
  );
};

export default UserCard;
