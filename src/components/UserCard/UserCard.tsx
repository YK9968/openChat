import { FC } from "react";
import { IUser } from "../../types/userTypes";
import { Link } from "react-router-dom";

interface IUserCardProps {
  user: IUser;
}

const UserCard: FC<IUserCardProps> = ({ user }) => {
  return (
    <>
      <p>{user.name}</p>
      <p className="mb-6">{user.phone}</p>
      <Link
        className="bg-rose-500 py-3 px-7 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mt-10 "
        to="/chat"
      >
        Go to chat
      </Link>
    </>
  );
};

export default UserCard;
