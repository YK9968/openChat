import { useEffect } from "react";
import FindUserList from "../../components/FindUserList/FindUserList";
import MyChatsList from "../../components/MyChatsList/MyChatsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getUserChats } from "../../redux/chats/operations";
import { selectUser } from "../../redux/auth/selectors";
import { selectChats } from "../../redux/chats/selectors";

const UserMainPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const chats = useAppSelector(selectChats);

  useEffect(() => {
    dispatch(getUserChats(user.id));
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <SearchBar />
        <FindUserList />
      </div>
      <MyChatsList chats={chats} />
    </div>
  );
};

export default UserMainPage;
