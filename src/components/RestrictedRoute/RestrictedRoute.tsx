import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../redux/store";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

interface IRestrictedRouteProps {
  component: React.ReactNode;
  redirectTo: string;
}
const RestrictedRoute: FC<IRestrictedRouteProps> = ({
  component,
  redirectTo,
}) => {
  const isLogggedIn = useAppSelector(selectIsLoggedIn);
  return isLogggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
