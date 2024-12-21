import { useState } from "react";
import { useAppDispatch } from "../../redux/store";
import { ILoginUser } from "../../types/authTypes";
import { ErrorMessage, Field, Formik, FormikHelpers, Form } from "formik";
import { FaEyeSlash } from "react-icons/fa";
import { loginValidation } from "../../validation/validationLoginUser";
import { loginUser } from "../../redux/auth/operations";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const initialValues: ILoginUser = {
    email: "",
    password: "",
  };

  const handleSubmit = async (
    value: ILoginUser,
    actions: FormikHelpers<ILoginUser>
  ): Promise<void> => {
    try {
      dispatch(loginUser(value));
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginValidation}
    >
      <Form>
        <h2 className="mb-5 font-medium text-4xl">Login</h2>
        <p className="mb-10 text-base opacity-50">
          Welcome back! Please enter your credentials to access your account and
          continue chating.
        </p>
        <div className="flex-col justify-center ">
          <div className="relative">
            <Field
              className="border py-4 pl-4 w-96 mb-4 rounded-2xl"
              type="text"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-base opacity-70   "
            />
          </div>

          <div className="relative">
            <Field
              className="border py-4 pl-4 w-96 rounded-2xl"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className={`absolute left-80 top-5  ${
                showPassword === true
                  ? " text-red-500"
                  : "text-black  hover:text-rose-500 transition-all duration-150 ease-in-out"
              } `}
            >
              <FaEyeSlash className="w-5 h-5" />
            </button>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-base opacity-70  "
            />
          </div>
          <button
            className="bg-rose-500 py-3 px-10 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mt-10 "
            type="submit"
          >
            Sign In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
