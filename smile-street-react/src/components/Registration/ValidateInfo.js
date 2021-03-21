export default function ValidateInfo(values) {
  let errors = {};

  if (!values['firstname'].trim()) {
    errors['firstname'] = 'First Name required';
  }

  if (!values.lastname.trim()) {
    errors.lastname = 'Last Name required';
  }

  if (!values.username) {
    errors.username = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.username)) {
    errors.username = 'Email address is invalid';
  }

  if (!values.contactnumber) {
    errors.contactnumber = 'Contact Number required';
  } else if (!/^[0-9]+$/.test(values.contactnumber)) {
    errors.contactnumber = 'Numeric Characters Only';
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
  return errors ? errors : false;
}
