import React from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import Profilebutton from './Profilebutton';
import {makeStyles} from '@material-ui/core/styles';
import MatchCard from './MatchCard';
import VolunteerMatchesData from './VolunteerMatches.json';
import {useHistory} from 'react-router-dom';




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

  const [data, setData] = React.useState(VolunteerMatchesData);

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
  };


  const rejectedMatches = data.filter((match) => match.accepted === false);
  return (
    <Container>
      <Paper className={classes.paper}>
        <Grid item xs={4}>
          {' '}
          <Profilebutton />
        </Grid>

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
