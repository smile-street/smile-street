import React, { useState } from 'react';
import { Container, Grid, Paper, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import PageHeading from '../PageHeading/PageHeading';
import Profilebutton from './Profilebutton';
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

  const rejectedMatches = data.filter((match) => match.accepted === false);


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    switch (event.target.innerText) {
      case "Edit Profile":
        history.push({pathname: '/VolEditProfile'});
        break
      case "Edit Interests":
        history.push({pathname: '/VolunteerInterests'});
        break
      case "Logout":
        // initiates the logout somehow
        // history.push({pathname: '/Logout'});
        console.log("logout!")
        break
      case "Delete Account":
        // open a delete account dialog
        console.log("dialog?")
        break  
      default: return undefined
    }
  };
  return (
    <Container>
      <Paper className={classes.paper}>
        <Button aria-controls="edit-menu" aria-haspopup="true" onClick={handleMenuClick} >
          Profile
        </Button>
        <Menu
          id="edit-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
          <MenuItem onClick={handleClose}>Edit Interests</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
          <MenuItem onClick={handleClose}>Delete Account</MenuItem>
        </Menu>

        <PageHeading heading="Here is the list of available volunteer matches" />

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
    </Container>
  );
}
