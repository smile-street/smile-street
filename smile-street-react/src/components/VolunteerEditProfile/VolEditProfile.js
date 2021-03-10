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
import EditUserForm from "./EditUserForm";
import PageHeading from "../PageHeading/PageHeading";
import { differenceInWeeks } from "date-fns";

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

const VolEditProfile = () => {
  const usersData = [
    {
      id: "jodrew_7@hotmail.com",
      firstName: "Viran",
      lastName: "Gohil",
      email: "jodrew_7@hotmail.com",
      contactNumber: "07931484239",
      password: "norstromXX",
      confirmPass: "norstromXX",
    },
  ];

  const [users, setUsers] = useState(usersData);
  // const addUser = (user) => {
  //   user.id = users.length + 1;
  //   setUsers([...users, user]);
  // };

  // const deleteUser = (id) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  const [editing, setEditing] = useState(false);
  const initialFormState = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPass: "",
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.email === id ? updateUser : user)));
  };

  const classes = useStyles();

  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Edit Volunteer Profile" />

          <EditUserForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            users={users}
          />
        </Container>
      </Paper>
    </Container>
  );
};

export default VolEditProfile;
