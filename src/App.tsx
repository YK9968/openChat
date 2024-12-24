import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import Loader from "./components/Loader/Loader";
import { Suspense, lazy } from "react";

const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const PrivateRoute = lazy(
  () => import("./components/PrivatRoute/PrivateRoute")
);
const RestrictedRoute = lazy(
  () => import("./components/RestrictedRoute/RestrictedRoute")
);
const RegistrationPage = lazy(
  () => import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const UserMainPage = lazy(() => import("./pages/UserMainPage/UserMainPage"));
const ChatPage = lazy(() => import("./pages/ChatPage/ChatPage"));

const App = () => {
  const dispatch = useAppDispatch();
  const isRefresh = useAppSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Layout>
      {isRefresh ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegistrationPage />}
                  redirectTo={"/user-chats"}
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute
                  component={<LoginPage />}
                  redirectTo={"/user-chats"}
                />
              }
            />

            <Route
              path="/user-chats"
              element={
                <PrivateRoute
                  component={<UserMainPage />}
                  redirectTo={"/login"}
                />
              }
            />
            <Route
              path="/chat/:id"
              element={
                <PrivateRoute component={<ChatPage />} redirectTo={"/login"} />
              }
            />
          </Routes>
        </Suspense>
      )}
    </Layout>
  );
};

export default App;
