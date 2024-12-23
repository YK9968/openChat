import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import PrivateRoute from "./components/PrivatRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserMainPage from "./pages/UserMainPage/UserMainPage";
import ChatPage from "./pages/ChatPage/ChatPage";

const App = () => {
  return (
    <Layout>
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
            <PrivateRoute component={<UserMainPage />} redirectTo={"/login"} />
          }
        />
        <Route
          path="/chat/:id"
          element={
            <PrivateRoute component={<ChatPage />} redirectTo={"/login"} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
