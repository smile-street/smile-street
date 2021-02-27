import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
} from "@material-ui/core";
import PageHeading from "../PageHeading/PageHeading";
import PasswordRecovery from "../PasswordRecovery/PasswordRecovery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#53bd98",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#449f80",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#449f80",
    },

    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#449f80",
    },
    margin: 8,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  form: {
    width: "100%",
  },
  buttonColor: {
    backgroundColor: "#53bd98",
    color: "white",
    background: "#449f80",

    "&:hover": {
      background: "#449f80",
    },
  },
}));

export default function Registration() {
  const classes = useStyles();
  const [firstName, setFirstName ] = useState("");
  const [lastName, setLastName ] = useState("");
  const [email, setEmail ] = useState("");
  const [contactNumber, setContactNumber ] = useState("");
  const [password, setPassword ] = useState("");
  const [confirmPassword, setConfirmPassword ] = useState("");

  function handleClick(event) {
    console.log(`This is your first name: ${firstName}\n
    This is your last name: ${lastName}\n
    This is your email: ${email}\n
    This is your contact number: ${contactNumber}\n
    This is your password: ${password}\n
    it should be equal to: ${confirmPassword}\n
    `)
  }
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Registration" />
          <Grid container spacing={3}>
            <TextField
              autoFocus
              variant="outlined"
              margin="normal"
              id="first name"
              label="First Name"
              className={classes.root}
              fullWidth
              value = { firstName }
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Last Name"
              className={classes.root}
              fullWidth
              value = { lastName }
              onChange={(event) => setLastName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              className={classes.root}
              fullWidth
              value = { email }
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              className={classes.root}
              fullWidth
              value = { contactNumber }
              onChange={(event) => setContactNumber(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              label="Password"
              type="password"
              className={classes.root}
              fullWidth
              value = { password }
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              id="confirm password"
              label="Confrim Password"
              className={classes.root}
              fullWidth
              value = { confirmPassword }
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor} onClick={handleClick}>
                Add availblity
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
