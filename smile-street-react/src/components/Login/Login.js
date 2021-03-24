import React, {useState} from 'react';
import {
  makeStyles,
  Button,
  TextField,
  Paper,
  Container,
  Grid,
  Divider,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import PageHeading from '../PageHeading/PageHeading';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import LoginData from './Login.json';
import useStyle from '../Style/Style';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login() {
  const classes = useStyle();
  const [openDialog, setOpenDialog] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  //dialog
  const handleClickOpen = () => setOpenDialog(true);
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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState(LoginData);

  let history = useHistory();

  const handleClickRegistration = (userType) => {
    history.push({
      pathname: '/Registration',
      state: {userType: userType},
    });
  };

  function checkCredentials() {
    // need a get handler here to get the volunteer/goodcause_id from the databse.
    userData.forEach((user) => {
      if (
        user.email === email &&
        user.password === password &&
        user['user-role'] === 'volunteer'
      ) {
        history.push({
          pathname: '/VolunteerMatches',
          state: {userId: user.user_id}, // currently hard coded into the json
        });
      }
      if (
        user.email === email &&
        user.password === password &&
        user['user-role'] === 'good-cause'
      ) {
        history.push({
          pathname: '/GoodCauseMatches',
          state: {goodCause_id: user.user_id}, // currently hard coded into the json
        });
      }
    });
  }
  return (
    <Container>
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Log In" />
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={classes.root}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className={classes.root}
            />
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                className={classes.button}
                style={{margin: 8}}
                onClick={checkCredentials}
              >
                Log in
              </Button>
            </Grid>
            <Grid item xs={12} sm={12} style={{margin: 8}}>
              <Divider />
            </Grid>
            <Grid item xs={12} sm={12} style={{margin: 8}}>
              <Link
                cursor={'pointer'}
                onClick={handleClickOpen}
                variant="body2"
                style={{margin: 8}}
              >
                {' '}
                Forget your password click here
              </Link>
            </Grid>
          </form>
          <Grid item xs={12} sm={12} style={{margin: 8}}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              id="good-cause"
              variant="contained"
              className={classes.button}
              onClick={() => handleClickRegistration('goodCause')}
            >
              Register as a Good Cause
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              id="volunteer"
              className={classes.button}
              style={{margin: 8}}
              onClick={() => handleClickRegistration('volunteer')}
            >
              Register as a Volunteer
            </Button>
          </Grid>
        </Container>
      </Paper>
      <Dialog
        open={openDialog}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Forgot your Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To reset your password enter your email and a new password.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="newPassword"
            label="Enter new Password"
            type="password"
            fullWidth
          />
          <TextField
            margin="dense"
            id="confirmPassword"
            label="Confirm New Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogClick} color="primary">
            Reset Password
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        onClose={handleToastClose}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      >
        <Alert onClose={handleToastClose} severity="warning">
          Check your email to confirm password reset!
        </Alert>
      </Snackbar>
    </Container>
  );
}
