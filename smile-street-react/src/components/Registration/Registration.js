import {useLocation, useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import {
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import useStyle from '../Style/Style';
import axios from 'axios';

export default function Registration() {
  let userId;
  const userRole = useLocation().state;
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const initialFormState = {
    firstname: '',
    lastname: '',
    username: '',
    contactnumber: '',
    password: '',
    confirmPass: '',
  };
  const [registration, setRegistration] = useState(initialFormState);

  const validate = () => {
    let temp = {...errors};
    if ('firstname' in registration)
      temp.firstname = registration.firstname ? '' : 'This field is required.';
    if ('lastname' in registration)
      temp.lastname = registration.lastname ? '' : 'This field is required.';
    if ('username' in registration)
      temp.username = /$^|.+@.+..+/.test(registration.username)
        ? ''
        : 'Email is not valid.';
    if ('contactnumber' in registration)
      temp.contactnumberr =
        registration.contactnumber.length > 6
          ? ''
          : 'Minimum 6 numbers required.';
    if ('password' in registration)
      temp.password =
        registration.password.length != 0 ? '' : 'This field is required.';
    setErrors({
      ...temp,
    });

    if (registration) return Object.values(temp).every((x) => x == '');
  };

  const handleChange = (e) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    if (validate()) {
      e.preventDefault();

      const newReg = {
        firstname: registration.firstname,
        lastname: registration.lastname,
        username: registration.username,
        contactnumber: registration.contactnumber,
        password: registration.password,
        confirmPass: registration.confirmPass,
      };

      const updatedReg = [{...registration}, newReg];
      setRegistration(updatedReg);

      setOpen(true);
      setRegistration(initialFormState);
      const values = {
        firstname: registration.firstname,
        lastname: registration.lastname,
        username: registration.username,
        contactnumber: registration.contactnumber,
      };
      if (userRole.userType === 'volunteer') {
        axios
          .post(
            'https://2itobgmiv3.execute-api.eu-west-2.amazonaws.com/dev/Volunteers',
            values
          )
          .then((response) => (userId = response.data))
          .then((response) =>
            history.push({
              pathname: '/VolunteerAvailability',
              state: {userId: userId},
            })
          )
          .catch((error) => {
            setOpen(false);
            console.log(error);
          });
      }
      if (userRole.userType === 'goodCause') {
        axios
          .post(
            'https://2itobgmiv3.execute-api.eu-west-2.amazonaws.com/dev/sgoodcauseregistration',
            values
          )
          .then((response) => (userId = response.data))
          .then((response) =>
            history.push({
              pathname: '/GoodCauseDetails',
              state: {userId: userId},
            })
          )
          .catch((error) => console.log(error));
      }
    }
  };

  const classes = useStyle();
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Registration" />
          <Grid container spacing={3}>
            <TextField
              variant="outlined"
              margin="normal"
              id="first name"
              label="First Name"
              style={{margin: 8}}
              fullWidth
              name="firstname"
              value={registration.firstname}
              onChange={handleChange}
              className={classes.root}
              error
              helperText={errors.firstname}
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Last Name"
              style={{margin: 8}}
              fullWidth
              name="lastname"
              value={registration.lastname}
              onChange={handleChange}
              className={classes.root}
              helperText={errors.lastname}
              error
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              style={{margin: 8}}
              fullWidth
              name="username"
              value={registration.username}
              onChange={handleChange}
              className={classes.root}
              helperText={errors.username}
              error
            />

            <TextField
              name="contactnumber"
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              style={{margin: 8}}
              fullWidth
              value={registration.contactnumber}
              onChange={handleChange}
              className={classes.root}
              helperText={errors.contactnumber}
              error
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              label="Password"
              style={{margin: 8}}
              fullWidth
              name="password"
              type="password"
              value={registration.password}
              onChange={handleChange}
              className={classes.root}
              helperText={errors.password}
              error
            />

            <TextField
              variant="outlined"
              margin="normal"
              id="confirm password"
              label="Confrim Password"
              style={{margin: 8}}
              fullWidth
              name="confirmPass"
              type="password"
              value={registration.confirmPass}
              onChange={handleChange}
              className={classes.root}
            />

            <Grid item xs={12} sm={12}>
              <Button
                onClick={handleClick}
                variant="contained"
                className={classes.button}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}
