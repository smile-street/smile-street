import React, { useState, useEffect } from "react";
import {
    makeStyles,
    Paper,
    Grid,
    Container,
    TextField,
    Button,
    DialogTitle,
    
  
  

Link,
  Divider,
  Dialog,
  DialogActions,
  
  DialogContent,
  DialogContentText,
  Snackbar,
  } from "@material-ui/core";

  import MuiAlert from "@material-ui/lab/Alert";

  import FormControl from "@material-ui/core/FormControl";
import PageHeading from "../PageHeading/PageHeading";
import EditUser from "./EditUserForm";

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
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "xs",
  },
  form: {
    width: "100%",
  },
  button: {
    backgroundColor: "#53bd98",
    color: "white",
    "&:hover": {
      background: "#449f80",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(
    () => {
      setUser(props.currentUser);
    },
    [props]
  );

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };


  const [openDialog, setOpenDialog] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  const handleClickOpen = () => setOpenDialog(true);

  const handleDialogClose = () => setOpenDialog(false);


const [openDialog1, setOpenDialog1] = useState(false);
  const handleClickOpen1 = () => setOpenDialog1(true);
  const handleDialogClose1 = () => setOpenDialog1(false);


  //toast
  const handleDialogClick = () => {
    handleDialogClose();
    setOpenToast(true);
  };

  const handleDialogClick1 = () => {
    handleDialogClose();
    
  };
  const handleToastClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenToast(false);
  };



  const classes = useStyles();

  return (
    <form 
      onSubmit={event => {
        event.preventDefault();
      
       props.updateUser(user.id, user);
      }}
    >



<TextField
              variant="outlined"
              margin="normal"
              id="first name"
              label="First Name"
              style={{ margin: 8 }}
              fullWidth
              name="firstName"
              value = {user.firstName}
              onChange={handleInputChange}
              className={classes.root}
              defaultValue= {props.users.map(user => (
                user.firstName
                ))}
             
           

             // {users.length > 0 ? (
              
              
            />

       
      
<TextField
              variant="outlined"
              margin="normal"
              id="last name"
              label="Last Name"
              style={{ margin: 8 }}
              fullWidth
              name="lastName"
              //type="text"
               value={user.lastName}
              onChange={handleInputChange}
              className={classes.root}

            defaultValue= {props.users.map(user => (
              user.lastName
              ))}

            />




<TextField
              variant="outlined"
              margin="normal"
              id="email"
              label="Email Address"
              style={{ margin: 8 }}
              fullWidth
              name="email"
             // value={user.email}
              onChange={handleInputChange}
              className={classes.root}
              defaultValue= {props.users.map(user => (
                user.email
                ))}
            />



<TextField
              variant="outlined"
              margin="normal"
              id="contact number"
              label="Contact Number"
              style={{ margin: 8 }}
              fullWidth
              name="contactNumber"
            //  value={user.contactNumber}
              onChange={handleInputChange}
              className={classes.root}
              defaultValue={props.users.map(user => (
                user.contactNumber
                ))}
            />







<Grid item xs={12} sm={12} style={{ margin: 8 }}>
              <Link
                cursor={"pointer"}
                onClick={handleClickOpen}
                variant="body2"
                style={{ margin: 8 }}
              >
                {" "}
                Change Your Password
              </Link>
            </Grid>




<Grid item xs={12} sm={12}>
      <Button
      className={classes.button}
      style={{ margin: 8 }}
      variant="contained"
      onClick={handleClickOpen1}
      >Update user</Button>
        </Grid>

  

        <Grid item xs={12} sm={12}>
      <Button
        label = "Enter"
        onClick={() => props.setEditing(false)}
        className={classes.button}
        style={{ margin: 8 }}
        variant="contained"
      >
        Cancel
      </Button>
      
      </Grid>






<Dialog
        open={openDialog1}
        onClose={handleDialogClose1}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Details Updated</DialogTitle>
       
        <DialogActions>
          <Button onClick={handleDialogClose1} color="primary">
            Keep Editing
          </Button>
          <Button onClick={handleDialogClick1} color="primary">
            View Matches
          </Button>
        </DialogActions>
      </Dialog>
     



































      <Dialog
        open={openDialog}
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
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleToastClose} severity="warning">
          Check your email to confirm password reset!
        </Alert>
      </Snackbar>

      
    </form>
  );
};

export default EditUserForm;
