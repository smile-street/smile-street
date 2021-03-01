import ValidateInfo from "./ValidateInfo.js";
import { useState } from "react";
import React from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  DialogTitle,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import PageHeading from "../PageHeading/PageHeading";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  form: {
    width: "100%",
  },
  button: {
    backgroundColor: "#53BD98",
    color: "white",
    "&:hover": {
      background: "#449F80",
    },
  },
}));
export default function Registration() {
  //const{errors} = ValidateInfo(validate);
  const [registration, newRegistration] = useState({
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPass: "",
  });
  const handleChange = (e) => {
    newRegistration({
      ...registration,
      [e.target.name]: e.target.value,
    });
  };
  const [errors, setErrors] = useState({ ValidateInfo });
  //////////////////////////////////////////////////
  const addRegistration = (text) => {
    const newReg = {
      text: text,
    };
    //takes the current array and reuilds and updates.
    const updatedReg = [...registration, newReg];
    newRegistration(updatedReg);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setErrors(ValidateInfo(registration));
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
              margin="normal"
              id="title"
              style={{ margin: 8 }}
              fullWidth
              autoFocus
              name="title"
              label="Title"
              variant="outlined"
              //  input onChange={handleChange}
              value={registration.title}
              onChange={handleChange}
            />
            {errors.title && <p>{errors.title}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="first name"
              label="First Name"
              style={{ margin: 8 }}
              fullWidth
              name="firstName"
              value={registration.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Last Name"
              style={{ margin: 8 }}
              fullWidth
              name="lastName"
              //type="text"
              value={registration.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              style={{ margin: 8 }}
              fullWidth
              name="email"
              value={registration.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              style={{ margin: 8 }}
              fullWidth
              name="contactNumber"
              value={registration.contactNumber}
              onChange={handleChange}
            />
            {errors.contactNumber && <p>{errors.contactNumber}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              label="Password"
              style={{ margin: 8 }}
              fullWidth
              name="password"
              value={registration.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              id="confirm password"
              label="Confrim Password"
              style={{ margin: 8 }}
              fullWidth
              name="confirmPass"
              value={registration.confirmPass}
              onChange={handleChange}
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