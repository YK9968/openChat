import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../redux/store";
import { selectIsLoading } from "../../redux/auth/selectors";
import { selectIsLoadingUser } from "../../redux/users/selectors";

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  const isLoadingAuth = useAppSelector(selectIsLoading);
  const isLoadingUsers = useAppSelector(selectIsLoadingUser);
  return (
    <div>
      {(isLoadingAuth || isLoadingUsers) && <Loader />}
      <Navigation />
      <div className="px-20">{children}</div>
    </div>
  );
};

export default Layout;
