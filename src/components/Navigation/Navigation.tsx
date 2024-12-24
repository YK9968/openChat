import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/slice";

const Navigation = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(logOut());
  };

  return (
    <header className="flex gap-2 px-20 py-4 items-center justify-end">
      {!isLoggedIn ? (
        <>
          {" "}
          <Link
            to="/register"
            className="bg-white py-3 px-10 border border-transparent rounded-xl hover:border-red-600 transition-all duration-150 ease-in-out "
          >
            Registration
          </Link>
          <Link
            to="/login"
            className="bg-rose-500 py-3 px-10 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white  "
          >
            Login
          </Link>
        </>
      ) : (
        <button
          onClick={handleLogOut}
          className="bg-rose-500 py-3 px-10 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white  "
        >
          LogOut
        </button>
      )}
    </header>
  );
};

export default Navigation;
