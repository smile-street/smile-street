import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Paper, Container, Divider, Grid } from '@material-ui/core';
import MatchVolunteersCard from './MatchedVolunteersCard';
import PageHeading from '../PageHeading/PageHeading';
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
  function reachOut(name) {
    console.log(name)
  }

  return (
    <div className={classes.root}>
      <Container component="main">
        <Paper className={classes.paper}>
          <PageHeading heading="These are your matched volunteers" />
          <GoodCauseProfileButton />
          <Grid
            container
            spacing={2}
            direction="row"
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
                            name={volunteer.name}
                            interest={volunteer.interest}
                            skill={volunteer.skill}
                            reachOut={reachOut}
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
