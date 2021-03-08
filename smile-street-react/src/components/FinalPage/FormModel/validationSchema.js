import * as Yup from 'yup';
import moment from 'moment';
import finalPageModel from './finalPageModel';
const {
  formField: {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    contactNumber,
    employerName,
    matchLocation,
    noOfDays,
    availableDates,
    selectSkills,
  },
} = finalPageModel;

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [contactNumber.name]: Yup.string().required(
      `${contactNumber.requiredErrorMsg}`
    ),
    [password.name]: Yup.string().required(`${password.requiredErrorMsg}`),

    [confirmPassword.name]: Yup.string()
      .nullable()
      .required(`${confirmPassword.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [employerName.name]: Yup.string()
      .nullable()
      .required(`${employerName.requiredErrorMsg}`),
    [employerName.name]: Yup.string()
      .nullable()
      .required(`${matchLocation.requiredErrorMsg}`),
    [matchLocation.name]: Yup.string()
      .nullable()
      .required(`${contactNumber.requiredErrorMsg}`),
    [noOfDays.name]: Yup.string()
      .nullable()
      .required(`${noOfDays.requiredErrorMsg}`),
    [noOfDays.name]: Yup.string()
      .nullable()
      .required(`${availableDates.requiredErrorMsg}`),
    [availableDates.name]: Yup.string()
      .nullable()
      .required(`${availableDates.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [selectSkills.name]: Yup.string()
      .nullable()
      .required(`${selectSkills.requiredErrorMsg}`),
  }),
];
