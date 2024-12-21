import FindUserList from "../../components/FindUserList/FindUserList";
import MyChatsList from "../../components/MyChatsList/MyChatsList";
import SearchBar from "../../components/SearchBar/SearchBar";

const UserMainPage = () => {
  return (
    <div className="flex justify-between">
      <div>
        <SearchBar />
        <FindUserList />
      </div>
      <MyChatsList />
    </div>
  );
};

export default UserMainPage;
