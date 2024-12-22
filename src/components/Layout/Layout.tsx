import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../redux/store";
import { selectIsLoading } from "../../redux/auth/selectors";
import { selectIsLoadingUser } from "../../redux/users/selectors";
import { selectIsLoaderChats } from "../../redux/chats/selectors";

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  const isLoadingAuth = useAppSelector(selectIsLoading);
  const isLoadingUsers = useAppSelector(selectIsLoadingUser);
  const isLoadingChats = useAppSelector(selectIsLoaderChats);

  return (
    <div>
      {(isLoadingAuth || isLoadingUsers || isLoadingChats) && <Loader />}
      <Navigation />
      <div className="px-20">{children}</div>
    </div>
  );
};

export default Layout;
