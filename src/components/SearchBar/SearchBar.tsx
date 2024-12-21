import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { searchUserValidation } from "../../validation/validationSearchUser";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectUser } from "../../redux/auth/selectors";
import { searchUsers } from "../../redux/users/operations";

const SearchBar = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const handleSearchUsers = async (
    value: { phone: string },
    actions: FormikHelpers<{ phone: string }>
  ): Promise<void> => {
    try {
      dispatch(searchUsers(value.phone));
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{ phone: "" }}
      onSubmit={handleSearchUsers}
      validationSchema={searchUserValidation}
    >
      <Form className="mb-6">
        <h2 className="mb-5 font-medium text-4xl">Hello,{user.name}</h2>
        <p className="mb-10 text-base opacity-50 w-96">
          Start searching for new friends to chat with — enter a phone number.
        </p>
        <div className="relative">
          <Field
            className="border py-4 pl-4 w-96 mb-4 rounded-2xl "
            type="text"
            name="phone"
            placeholder="Phone Number"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className="text-red-500 text-base opacity-70 absolute bottom-20 left-4   "
          />
        </div>
        <button
          className="bg-rose-500 py-3 px-10 border-none rounded-xl hover:bg-rose-600 transition-all duration-150 ease-in-out text-white mt-2 "
          type="submit"
        >
          Search user
        </button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
