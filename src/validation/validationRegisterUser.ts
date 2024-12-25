import * as Yup from "yup";

export const registerValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  phone: Yup.string()
    .matches(
      /^0\d{9}$/,
      "Phone number should be in format (example 0681234567)"
    )
    .required("Phone number is required"),
});
