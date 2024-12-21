import * as Yup from "yup";

export const searchUserValidation = Yup.object().shape({
  phone: Yup.string()
    .required("Phone number is required")
    .min(3, "Phone number must be at least 3 digits")
    .max(10, "Phone number can be at most 10 digits")
    .matches(/^\d{3,10}$/, "Phone number must be a valid number (only digits)"), // додано перевірку на цифри
});
