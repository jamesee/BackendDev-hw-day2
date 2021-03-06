const yup = require("yup");

const login = yup.object({
  body: yup.object({
    email: yup.string().required("Email is required").email("Must be a valid email."),
    password: yup
      .string()
      .trim()
      .min(6, "Password must be more than 6 characters.")
      .max(20, "Password must be less than 20 characters.")
      .required("password is required"),
  }),
});

const register = yup.object({
  body: yup.object({
    username: yup.string().trim().required("Username is required"),
    email: yup.string().required("Email is required").email("Must be a valid email."),
    password: yup
      .string()
      .trim()
      .min(6, "Password must be more than 6 characters.")
      .max(20, "Password must be less than 20 characters.")
      .required("password is required"),
  }),
});

module.exports = {
  login,
  register,
};
