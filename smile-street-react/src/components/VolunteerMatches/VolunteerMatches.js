import React, { useState } from 'react';
import { Container, 
        Grid, 
        Paper, 
        Button, 
        Menu, 
        MenuItem,
        Dialog,
        DialogActions,
        DialogTitle,
        DialogContentText,
        DialogContent, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import PageHeading from '../PageHeading/PageHeading';
import MatchCard from './MatchCard';
import VolunteerMatchesData from './VolunteerMatches.json';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonColor: {
    backgroundColor: '#53bd98',
    color: 'white',
    background: '#449f80',

    '&:hover': {
      background: '#449f80',
    },
  },
  acceptedItem: {
    backgroundColor: 'red',
  },
}));

export default function VolunteerMatches() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState(VolunteerMatchesData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);


  const handleAgree = (id) => {
    const updatedMatchCard = data.filter((card) => card.id !== id);
    setData(updatedMatchCard);
  };
  const handleAccepted = (id) => {
    let matches = data;
    for (let match of matches) {
      if (match.id === id) {
        match.accepted = match.accepted ? false : true;
      }
    }
    setData(matches);
    console.log(data);
  };

  // const rejectedMatches = data.filter((match) => match.accepted === false); //not in use right now

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDeleteOption = () => {
    setAnchorEl(null);
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Paper className={classes.paper}>
        <Button aria-controls="edit-menu" aria-haspopup="true" onClick={handleMenuClick} className={classes.buttonColor}>
          Profile
        </Button>
        <Menu
          id="edit-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => {history.push( {pathname: '/VolEditProfile'} )} }>Edit Profile</MenuItem>
          <MenuItem onClick={() => {history.push( {pathname: '/VolunteerInterests'} )} }>Edit Interests</MenuItem>
          <MenuItem onClick={() => {history.push( {pathname: '/'} )} }>Logout</MenuItem>
          <MenuItem onClick={handleDeleteOption}>Delete Account</MenuItem>
        </Menu>

        <PageHeading heading="Good Cause Opportunities" />

        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.map((item) => (
            <MatchCard
              id={item.id}
              GoodCause={item.GoodCause}
              Description={item.Description}
              Dates={item.Dates}
              accepted={item.accepted}
              handleAgree={handleAgree}
              handleAccepted={handleAccepted}
            />
          ))}
        </Grid>
      </Paper>
      {/* Delete account Dialog */}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to Delete your account?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {'There is no way to restore your account once deleted. If you change your mind you will need to create a new account.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} className={classes.buttonColor}>
            I changed my mind
          </Button>
          <Button onClick={handleDialogClose} color="secondary">
            Yes, Delete it
          </Button>
        </DialogActions>
      </Dialog>
      {/*  */}
    </Container>
  );
}
