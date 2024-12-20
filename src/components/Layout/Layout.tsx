import { FC, ReactNode } from "react";
import Navigation from "../Navigation/Navigation";

interface ILayout {
  children: ReactNode;
}
const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className="px-20">{children}</div>
    </div>
  );
};

export default Layout;
