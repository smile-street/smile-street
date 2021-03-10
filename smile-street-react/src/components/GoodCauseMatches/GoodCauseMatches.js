import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import { Paper, 
        Container, 
        Grid, 
        Button,
        Menu, 
        MenuItem,
        Dialog,
        DialogActions,
        DialogTitle,
        DialogContentText,
        DialogContent, } from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import MatchVolunteersCard from './MatchedVolunteersCard';
import GoodCauseMatches from './GoodCauseMatches.json';

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
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const uniqueOpportunities = [...new Set(GoodCauseMatches.map(match => match.opportunityID))]; // create a Set of opportunity IDs

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
    <div className={classes.root}>
      <Container component="main">
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
            <MenuItem onClick={() => {history.push( {pathname: '/GoodCauseDetails'} )} }>Edit Profile</MenuItem>
            <MenuItem onClick={() => {history.push( {pathname: '/GoodCauseOpportunity'} )} }>Add Opportunity</MenuItem>
            <MenuItem onClick={() => {history.push( {pathname: '/'} )} }>Logout</MenuItem>
            <MenuItem onClick={handleDeleteOption}>Delete Account</MenuItem>
          </Menu>
          <PageHeading heading="These are your matched volunteers" />
          <Grid
            container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
          >
            {/* Should be displayed as a table of sorts with the action on the end. maybe even a checkbox style list?  */}
            {uniqueOpportunities.map(ID => {
              return (
                <Grid container>Opportunity: {ID}
                  {GoodCauseMatches.filter(match => 
                    match.opportunityID === ID).map(volunteer => {
                      return (
                        <Grid item xs={12} sm={4}>
                          <MatchVolunteersCard
                            volunteer={volunteer}
                          />
                        </Grid>
                      )
                    })
                  }
                </Grid>
              )
            })}
          </Grid>
        </Paper>
      </Container>

      {/* Delete account Dialog */}
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Are you sure you want to Delete this account?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {'There is no way to restore the account once deleted. If you change your mind you will need to create a new account.'}
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
    </div>
  );
}
