import {useLocation, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import ValidateInfo from './ValidateInfo';
import useStyle from '../Style/Style';
import axios from 'axios';

export default function Registration() {
  const [usedrId, setUserId] = useState('');
  const userRole = useLocation().state;
  const history = useHistory();
  const [errors, setErrors] = useState({});
  const initialFormState = {
    firstname: '',
    lastname: '',
    username: '',
    contactnumber: '',
    password: '',
    confirmPass: '',
  };
  const [registration, setRegistration] = useState(initialFormState);
  const handleChange = (e) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    setErrors(ValidateInfo(registration));
    e.preventDefault();

    const newReg = {
      firstname: registration.firstname,
      lastname: registration.lastname,
      username: registration.username,
      contactnumber: registration.contactnumber,
      password: registration.password,
      confirmPass: registration.confirmPass,
    };
    //takes the current array and reuilds and updates.
    const updatedReg = [{...registration}, newReg];
    setRegistration(updatedReg);

    if (true) {
      const values = setRegistration(initialFormState);
      if (userRole.userType === 'volunteer') {
        axios
          .post(
            'https://2itobgmiv3.execute-api.eu-west-2.amazonaws.com/dev/Volunteers',
            {
              firstname: registration.firstname,
              lastname: registration.lastname,
              username: registration.username,
              contactnumber: registration.contactnumber,
            }
          )
          .then((response) => {
            console.log('This is the new volunteer id:' + response.data);
            const volunteerId = response.data;
            history.push({
              pathname: '/VolunteerAvailability',
              state: {userId: volunteerId, userRole: userRole},
            });
          })
          .catch((error) => console.log(error));
      }
      if (userRole.userType === 'goodCause') {
        axios
          .post(
            'https://2itobgmiv3.execute-api.eu-west-2.amazonaws.com/dev/sgoodcause',
            {
              firstname: registration.firstname,
              lastname: registration.lastname,
              emailaddress: registration.username,
              contactnumber: registration.contactnumber,
            }
          )
          .then((response) => {
            console.log('This is the new good cause id:' + response.data);
          })
          .catch((error) => console.log(error));
        history.push({
          pathname: '/GoodCauseDetails',
          state: {usedrId: usedrId},
        });
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
            />
            {errors.firstname && <p>{errors.firstname}</p>}
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
            />
            {errors.lastname && <p>{errors.lastname}</p>}
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
            />
            {errors.username && <p>{errors.username}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              style={{margin: 8}}
              fullWidth
              name="contactnumber"
              value={registration.contactnumber}
              onChange={handleChange}
              className={classes.root}
            />
            {errors.contactnumber && <p>{errors.contactnumber}</p>}
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
            />
            {errors.password && <p>{errors.password}</p>}
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
            {errors.confirmPass && <p>{errors.confirmPass}</p>}
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
    </Container>
  );
}
