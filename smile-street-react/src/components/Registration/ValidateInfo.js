export default function ValidateInfo(values) {
  console.log(values);
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = 'First Name required';
  }

  if (!values.lastName.trim()) {
    errors.lastName = 'Last Name required';
  }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.contactNumber) {
    errors.contactNumber = 'Contact Number required';
  } else if (!/^[0-9]+$/.test(values.contactNumber)) {
    errors.contactNumber = 'Numeric Characters Only';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.confirmPass) {
    errors.confirmPass = 'Password is required';
  } else if (values.confirmPass !== values.password) {
    errors.confirmPass = 'Passwords do not match';
  }
  return errors;
}
