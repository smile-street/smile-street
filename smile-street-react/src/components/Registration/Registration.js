import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
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
              autoComplete="new-password"
              className={classes.root}
              fullWidth
              value = { password }
              onChange={(event) => setPassword(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              autoComplete="new-password"
              id="confirm password"
              label="Confrim Password"
              className={classes.root}
              fullWidth
              value = { confirmPassword }
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <Grid item xs={12} sm={12}>
              <Button variant="contained" className={classes.buttonColor} onClick={handleClick}>
                Confirm your email
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
