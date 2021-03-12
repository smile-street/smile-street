import React, {useState} from 'react';
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
  DialogTitle,
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import EditUserForm from './EditUserForm';
import PageHeading from '../PageHeading/PageHeading';
import {differenceInWeeks} from 'date-fns';
import useStyle from '../Style/Style';

const VolEditProfile = () => {
  const usersData = [
    {
      id: 'jodrew_7@hotmail.com',
      firstName: 'Viran',
      lastName: 'Gohil',
      email: 'jodrew_7@hotmail.com',
      contactNumber: '07931484239',
      password: 'norstromXX',
      confirmPass: 'norstromXX',
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
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    confirmPass: '',
  };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const updateUser = (id, updateUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.email === id ? updateUser : user)));
  };

  const classes = useStyle();

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
