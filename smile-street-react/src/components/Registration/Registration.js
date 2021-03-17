import {useLocation, useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import Stepper from '../Stepper/Stepper';
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

export default function Registration() {
  const userRole = useLocation().state;
  const history = useHistory();
  const initialFormState = {
    userType: userRole.userType,
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPass: '',
  };
  const [registration, setRegistration] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  //////////////////////////////////////////////////

  const handleClick = (e) => {
    setErrors(ValidateInfo(registration));
    e.preventDefault();

    const newReg = {
      firstName: registration.firstName,
      lastName: registration.lastName,
      email: registration.email,
      contactNumber: registration.contactNumber,
      password: registration.password,
      confirmPass: registration.confirmPass,
    };
    //takes the current array and reuilds and updates.
    const updatedReg = [{...registration}, newReg];
    setRegistration(updatedReg);
    if (true) {
      //this needs to be changed to validate the form!
      setRegistration(initialFormState);
      if (userRole.userType === 'volunteer') {
        history.push({pathname: '/VolunteerAvailability'});
      }
      if (userRole.userType === 'goodCause') {
        history.push({pathname: '/GoodCauseDetails'});
      }
    }
  };

  //////////////////////////////////////////////////////////
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
              name="firstName"
              value={registration.firstName}
              onChange={handleChange}
              className={classes.root}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Last Name"
              style={{margin: 8}}
              fullWidth
              name="lastName"
              value={registration.lastName}
              onChange={handleChange}
              className={classes.root}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              style={{margin: 8}}
              fullWidth
              name="email"
              value={registration.email}
              onChange={handleChange}
              className={classes.root}
            />
            {errors.email && <p>{errors.email}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              style={{margin: 8}}
              fullWidth
              name="contactNumber"
              value={registration.contactNumber}
              onChange={handleChange}
              className={classes.root}
            />
            {errors.contactNumber && <p>{errors.contactNumber}</p>}
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
