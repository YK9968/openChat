import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { IRegisterUser } from "../../types/authTypes";
import { registerValidation } from "../../validation/validationRegisterUser";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { useAppDispatch } from "../../redux/store";
import { registerUser } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const initialValues: IRegisterUser = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (
    value: IRegisterUser,
    actions: FormikHelpers<IRegisterUser>
  ): Promise<void> => {
    try {
      dispatch(registerUser(value));
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registerValidation}
    >
      <Form>
        <h2 className="mb-5 font-medium text-4xl">Registration</h2>
        <p className="mb-10 text-base opacity-50">
          Thank you for your interest in our chat! In order to register, we need
          some information. Please provide us with the following information.
        </p>
        <div className="flex-col justify-center ">
          <div className="relative">
            <Field
              className="border py-4 pl-4 w-96 mb-4 rounded-2xl "
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-rose-500 text-base absolute left-400 top-4  "
            />
          </div>

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
              className="text-rose-500 text-base absolute left-400 top-4  "
            />
          </div>
          <div className="relative">
            <Field
              className="border py-4 pl-4 w-96 mb-4 rounded-2xl"
              type="text"
              name="phone"
              placeholder="Phone number"
            />
            <ErrorMessage
              name="phone"
              component="div"
              className="text-rose-500 text-base absolute left-400 top-4 "
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
                  ? " text-rose-500"
                  : "text-black  hover:text-rose-500 transition-all duration-150 ease-in-out "
              } `}
            >
              <FaEyeSlash className="w-5 h-5" />
            </button>
            <ErrorMessage
              name="password"
              component="div"
              className="text-rose-500 text-base absolute left-400 top-4 "
            />
          </div>
          <button
            className="bg-rose-500 py-3 px-10 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mt-10 "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
