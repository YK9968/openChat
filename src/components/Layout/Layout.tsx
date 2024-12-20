import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import { useAppSelector } from "../../redux/store";
import { selectIsLoading } from "../../redux/auth/selectors";

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  const isLoading = useAppSelector(selectIsLoading);
  return (
    <div>
      {isLoading && <Loader />}
      <Navigation />
      <div className="px-20">{children}</div>
    </div>
  );
};

export default Layout;
