export default function validateLogin(values) {
  let errors = {};

  if (!values.name) {
    errors.name = 'name is required';
  }

  if (!values.email) {
    errors.email = 'email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 5) {
    errors.password = 'Password needs to be more than 10 characters';
  }
  return errors;
}
