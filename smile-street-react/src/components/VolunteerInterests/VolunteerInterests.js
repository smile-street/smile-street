import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Container, Grid, Button, Divider} from '@material-ui/core';
import InterestSquares from './InterestSquares';
import SkillsAutoComplete from './SkillsAutoComplete';
import PageHeading from '../PageHeading/PageHeading';
import interestData from './interests.json';
import {useLocation, useHistory} from 'react-router-dom';
import Interests from './skillsData.json';
import axios from 'axios';

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

console.log('Interests from', Interests);

export default function VolunteerInterests() {
  const history = useHistory();
  const userRole = useLocation().state.userRole;
  const volunteer_id = useLocation().state.userId;
  const [skills, setSkills] = useState('');

  const classes = useStyles();
  let interests = interestData;
  const selectInterest = (id) => {
    for (let interest of interests) {
      if (interest.key === id) {
        interest.selected = interest.selected ? false : true;
      }
    }
  };

  let skillsForApi = Interests.map((skill) => {
    let returnObj = {};
    returnObj[skill.dbColumnTitle] = skills.includes(skill);
    return returnObj;
  });
  console.log(skillsForApi);

  const handleComplete = async (event) => {
    event.preventDefault();
    await axios
      .put(
        `https://2itobgmiv3.execute-api.eu-west-2.amazonaws.com/dev/SaveVolunteerIntrests/${volunteer_id}`,
        skillsForApi
      )
      .then((response) => {
        console.log('This is the new volunteer id:' + response.data);
        const volunteerId = response.data;
        history.push({
          pathname: '/VolunteerMatches',
          state: {userId: volunteerId, userRole: userRole},
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <PageHeading heading="Select your interests" />
        <Grid container spacing={3}>
          {interests.map((interest) => {
            return (
              <Grid item xs={6} sm={3}>
                <InterestSquares
                  id={interest.key}
                  title={interest.skill}
                  image={interest.image}
                  selected={interest.selected}
                  selectInterest={selectInterest}
                />
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={12} sm={12} style={{margin: 8}}>
          <Divider />
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12} sm={6}>
            <SkillsAutoComplete setSkills={setSkills} fullWidth />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} style={{margin: 8}}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} style={{margin: 8}}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            className={classes.buttonColor}
            onClick={handleComplete}
          >
            I want to see my matches!
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/mangsaabguru" title="mangsaabguru">mangsaabguru</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
