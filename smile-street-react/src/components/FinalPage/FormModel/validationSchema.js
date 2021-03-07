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
  },
} = finalPageModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    [email.name]: Yup.string().required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string()
      .nullable()
      .required(`${password.requiredErrorMsg}`),
    [confirmPassword.name]: Yup.string()
      .nullable()
      .required(`${confirmPassword.requiredErrorMsg}`),

    //     [zipcode.name]: Yup.string()
    //       .required(`${zipcode.requiredErrorMsg}`)
    //       .test(
    //         'len',
    //         `${zipcode.invalidErrorMsg}`,
    //         (val) => val && val.length === 5
    //       ),
    //     [country.name]: Yup.string()
    //       .nullable()
    //       .required(`${country.requiredErrorMsg}`),
    //   }),
    //   Yup.object().shape({
    //     [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    //     [cardNumber.name]: Yup.string()
    //       .required(`${cardNumber.requiredErrorMsg}`)
    //       .matches(visaRegEx, cardNumber.invalidErrorMsg),
    //     [expiryDate.name]: Yup.string()
    //       .nullable()
    //       .required(`${expiryDate.requiredErrorMsg}`)
    //       .test('expDate', expiryDate.invalidErrorMsg, (val) => {
    //         if (val) {
    //           const startDate = new Date();
    //           const endDate = new Date(2050, 12, 31);
    //           if (moment(val, moment.ISO_8601).isValid()) {
    //             return moment(val).isBetween(startDate, endDate);
    //           }
    //           return false;
    //         }
    //         return false;
    //       }),
    //     [cvv.name]: Yup.string()
    //       .required(`${cvv.requiredErrorMsg}`)
    //       .test('len', `${cvv.invalidErrorMsg}`, (val) => val && val.length === 3),
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
];
