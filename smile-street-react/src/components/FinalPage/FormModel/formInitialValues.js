import finalPageModel from './finalPageModel';

const {
  formField: {
    firstName,
    lastName,
    contactNumber,
    email,
    password,
    confirmPassword,
    employerName,
    matchLocation,
    noOfDays,
    availableDates,
  },
} = finalPageModel;

export default {
  [firstName.name]: '',
  [lastName.name]: '',
  [contactNumber.name]: '',
  [email.name]: '',
  [password.name]: '',
  [confirmPassword.name]: '',
  [employerName.name]: '',
  [matchLocation.name]: '',
  [noOfDays.name]: '',
  [availableDates.name]: '',
};
