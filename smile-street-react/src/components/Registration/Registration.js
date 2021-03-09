import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import ValidateInfo from './ValidateInfo.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#53bd98',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#449f80',
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#449f80',
    },

    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#449f80',
    },
    margin: 8,
  },
  paper: {
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 'xs',
  },
  form: {
    width: '100%',
  },
  button: {
    backgroundColor: '#53bd98',
    color: 'white',
    '&:hover': {
      background: '#449f80',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  },
}));

export default function Registration() {
  const location = useLocation();
  const initialFormState = {
    userType: location.state.userType,
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPass: '',
  };
  const [registration, setRegistration] = useState(initialFormState);
  const [errors, setErrors] = useState({ValidateInfo});
  const handleChange = (e) => {
    setRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };

  //////////////////////////////////////////////////

  const handleClick = (e) => {
    e.preventDefault();
    setErrors(ValidateInfo(registration));
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
    console.log(registration);
    setRegistration(initialFormState);
  };

  //////////////////////////////////////////////////////////
  const classes = useStyles();
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
              //type="text"
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
