import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Paper, Container, Grid, Button } from '@material-ui/core';
import { Dialog, 
        DialogActions, 
        DialogContent, 
        DialogContentText, 
        DialogTitle } from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import MatchVolunteersCard from './MatchedVolunteersCard';
import GoodCauseProfileButton from './GoodCauseProfileButton';
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
}));

export default function FullWidthGrid() {
  const classes = useStyles();
  const uniqueOpportunities = [...new Set(GoodCauseMatches.map(match => match.opportunityID))]; // create a Set of opportunity IDs

  return (
    <div className={classes.root}>
      <Container component="main">
        <Paper className={classes.paper}>
          <PageHeading heading="These are your matched volunteers" />
          <GoodCauseProfileButton />
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
      
      
      
    </div>
  );
}
