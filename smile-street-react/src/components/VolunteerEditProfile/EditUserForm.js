import React, {useState, useEffect} from 'react';
import {
  makeStyles,
  Grid,
  TextField,
  Button,
  DialogTitle,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Snackbar,
} from '@material-ui/core';

import MuiAlert from '@material-ui/lab/Alert';

import FormControl from '@material-ui/core/FormControl';
import PageHeading from '../PageHeading/PageHeading';
import EditUser from './EditUserForm';
import {useHistory} from 'react-router-dom';
import useStyle from '../Style/Style';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EditUserForm = (props) => {
  const classes = useStyle();
  const history = useHistory();
  const [user, setUser] = useState(props.currentUser);
  const [passwordDialog, setPasswordDialog] = useState(false);
  const [openToast, setOpenToast] = useState(false);
  const [updateDialog, setUpdateDialog] = useState(false);
  const handleChangePassLink = () => setPasswordDialog(true);
  const handleDialogClose = () => setPasswordDialog(false);
  const handleSaveButtonClick = () => setUpdateDialog(true);
  const handleUpdateDialogClose = () => setUpdateDialog(false);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setUser({...user, [name]: value});
  };

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

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <TextField
        variant="outlined"
        margin="normal"
        id="first name"
        label="First Name"
        style={{margin: 8}}
        fullWidth
        name="firstName"
        onChange={handleInputChange}
        className={classes.root}
        defaultValue={props.users.map((profile) => profile.firstName)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        id="last name"
        label="Last Name"
        style={{margin: 8}}
        fullWidth
        name="lastName"
        onChange={handleInputChange}
        className={classes.root}
        defaultValue={props.users.map((profile) => profile.lastName)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        id="email"
        label="Email Address"
        style={{margin: 8}}
        fullWidth
        name="email"
        onChange={handleInputChange}
        className={classes.root}
        defaultValue={props.users.map((profile) => profile.email)}
      />

      <TextField
        variant="outlined"
        margin="normal"
        id="contact number"
        label="Contact Number"
        style={{margin: 8}}
        fullWidth
        name="contactNumber"
        onChange={handleInputChange}
        className={classes.root}
        defaultValue={props.users.map((profile) => profile.contactNumber)}
      />

      <Grid item xs={12} sm={12} style={{margin: 8}}>
        <Link
          cursor={'pointer'}
          onClick={handleChangePassLink}
          variant="body2"
          style={{margin: 8}}
        >
          {' '}
          Change Your Password
        </Link>
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button
          className={classes.button}
          style={{margin: 8}}
          variant="contained"
          onClick={handleSaveButtonClick}
        >
          Save
        </Button>
      </Grid>

      {/* Update button Dialog */}
      <Dialog
        open={updateDialog}
        onClose={handleUpdateDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Details Updated</DialogTitle>
        <DialogActions>
          <Button onClick={handleUpdateDialogClose} color="primary">
            Keep Editing
          </Button>
          <Button
            onClick={() => {
              history.push({pathname: '/VolunteerMatches'});
            }}
            color="primary"
          >
            View Matches
          </Button>
        </DialogActions>
      </Dialog>

      {/* Password reset Dialog */}
      <Dialog
        open={passwordDialog}
        onClose={handleDialogClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change Your Password</DialogTitle>
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
    </form>
  );
};

export default EditUserForm;
