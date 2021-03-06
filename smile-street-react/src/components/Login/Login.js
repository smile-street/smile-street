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
  TextField: {
    borderColor: 'red',
    borderWidth: 4,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login() {
  const classes = useStyles();
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

  function checkCredentials(event) {
    console.log(
      `This is your email: ${email}\nThis is your password: ${password}`
    );
  }

  let history = useHistory();
  const handleClickRegistration = () => {
    history.push('/Registration');
  };

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

          <Grid item xs={12} sm={12} style={{margin: 8}}>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={handleClickRegistration}
            >
              Register as a Good Cause
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              style={{margin: 8}}
              onClick={handleClickRegistration}
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
