import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

interface IPrivateRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}

const PrivateRoute: FC<IPrivateRouteProps> = ({ component, redirectTo }) => {
  const isLogggedIn = useAppSelector(selectIsLoggedIn);

  return isLogggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
