import finalPageModel from './finalPageModel';

const {
  formField: {
    firstName,
    lastName,
    contactNumber,
    email,
    password,
    confirmPassword,
  },
} = finalPageModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [contactNumber.name]: '',
  [email.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
};
