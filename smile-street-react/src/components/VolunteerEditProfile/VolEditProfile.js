import React, { useState } from "react";
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  DialogTitle,
  Menu,
  MenuItem,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import EditUserForm from "./EditUserForm";
import PageHeading from "../PageHeading/PageHeading";
import { differenceInWeeks } from "date-fns";
import useStyle from "../Style/Style";
import { useHistory } from "react-router-dom";







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

  const [open, setOpen] = useState(false);

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

  const classes = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteOption = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <Button
            aria-controls="edit-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            className={classes.button}
          >
            Profile
          </Button>
          <Menu
            id="edit-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            
            <MenuItem
              onClick={() => {
                history.push({ pathname: "/VolunteerInterests" });
              }}
            >
              Edit Interests
            </MenuItem>
            <MenuItem
              onClick={() => {
                history.push({ pathname: "/" });
              }}
            >
              Logout
            </MenuItem>
            <MenuItem onClick={handleDeleteOption}>Delete Account</MenuItem>
          </Menu>

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
