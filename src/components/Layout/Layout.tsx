import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../redux/store";
import { selectIsLoading } from "../../redux/auth/selectors";
import { selectIsLoadingUser } from "../../redux/users/selectors";
import { selectIsLoaderChats } from "../../redux/chats/selectors";
import { selectIsLoadingMsg } from "../../redux/messages/selectors";

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  const isLoadingAuth = useAppSelector(selectIsLoading);
  const isLoadingUsers = useAppSelector(selectIsLoadingUser);
  const isLoadingChats = useAppSelector(selectIsLoaderChats);
  const isLoadingMsg = useAppSelector(selectIsLoadingMsg);

  console.log(isLoadingMsg);

  return (
    <div>
      {(isLoadingAuth || isLoadingUsers || isLoadingChats || isLoadingMsg) && (
        <Loader />
      )}
      <Navigation />
      <div className="px-20">{children}</div>
    </div>
  );
};

export default Layout;
