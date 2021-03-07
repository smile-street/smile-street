import React, { useState, useEffect } from "react";
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




<TextField
              variant="outlined"
              margin="normal"
              id="password"
              label="Password"
              style={{ margin: 8 }}
              fullWidth
              name="password"
              //value={user.password}
              onChange={handleInputChange}
              className={classes.root}
              defaultValue={props.users.map(user => (
                user.password
                ))}
            />



<TextField
              variant="outlined"
              margin="normal"
              id="confirm password"
              label="Confrim Password"
              style={{ margin: 8 }}
              fullWidth
              name="confirmPass"
              //value={user.confirmPass}
              onChange={handleInputChange}
              className={classes.root}
defaultValue={props.users.map(user => (
  user.confirmPass
  ))}

            />




    
      <button>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
