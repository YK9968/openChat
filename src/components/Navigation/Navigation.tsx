import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className="flex gap-2 px-20 py-4 items-center justify-end">
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
    </header>
  );
};

export default Navigation;
