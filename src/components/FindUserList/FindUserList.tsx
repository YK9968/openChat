import { selectUser } from "../../redux/auth/selectors";
import { useAppSelector } from "../../redux/store";
import { selectUsers } from "../../redux/users/selectors";
import UserCard from "../UserCard/UserCard";

const FindUserList = () => {
  const userInfo = useAppSelector(selectUser);
  const users = useAppSelector(selectUsers);

  if (!users) {
    return (
      <p>
        Sorry, but no users could be found with this phone number. Please check
        the entered information and try again
      </p>
    );
  }
  const fiterUsers = users.filter((user) => user.email !== userInfo.email);

  return (
    <ul className="flex flex-wrap gap-3 w-findUsersListWidth">
      {fiterUsers.map((user) => (
        <li className="bg-white w-42 h-32 rounded-2xl p-3 " key={user.id}>
          <UserCard user={user} />
        </li>
      ))}
    </ul>
  );
};

export default FindUserList;
