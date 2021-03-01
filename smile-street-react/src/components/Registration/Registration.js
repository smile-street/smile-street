
import ValidateInfo from "./ValidateInfo.js";
import React, { useState } from "react";

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

  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

import PageHeading from "../PageHeading/PageHeading";

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const [firstName, setFirstName ] = useState("");
  const [lastName, setLastName ] = useState("");
  const [email, setEmail ] = useState("");
  const [contactNumber, setContactNumber ] = useState("");
  const [password, setPassword ] = useState("");
  const [confirmPassword, setConfirmPassword ] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  //dialog
  const handleDialogClose = () => setOpenDialog(false);
  //toast
  const handleDialogClick = () => {
    handleDialogClose();
    setOpenToast(true);
  };
  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenToast(false);
  };
  //submit button
  function handleClick() {
    setOpenDialog(true);
    console.log([{
      "firstName": firstName,
      "lastName": lastName,
      "email": email,
      "contactNumber": contactNumber,
      "password": password
    }])
  }
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Registration" />

          <Grid container spacing={3}>
            <form>
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
              className={classes.root}
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
              className={classes.root}
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
              className={classes.root}
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
              className={classes.root}
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
              type="password"
              autoComplete="new-password"
              className={classes.root}
              fullWidth

              name="password"
              value={registration.password}
              onChange={handleChange}

            />

            {errors.password && <p>{errors.password}</p>}
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              autoComplete="new-password"
              id="confirm password"
              label="Confrim Password"
              className={classes.root}
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
            </form>
          </Grid>
        </Container>
      </Paper>
      {/* dialog overlay */}
      <Dialog open={openDialog} onClose={handleDialogClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Check your email!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We've sent you a confirmation email with a 6 digit code. Enter the code to confirm your email and continue.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="verificationCode"
            label="Verification Code"
            fullWidth
          />          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClick} color="primary">
            Verify
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar open={openToast} autoHideDuration={6000} onClose={handleToastClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Alert onClose={handleToastClose} severity="success">
          Email confirmed!
        </Alert>
      </Snackbar>
    </Container>
  );
}
