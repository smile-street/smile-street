import React from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import PageHeading from '../PageHeading/PageHeading';
import Profilebutton from './Profilebutton';
import {makeStyles} from '@material-ui/core/styles';
import MatchCard from './MatchCard';

import goodCauseDisplayDetailsMock from '../../goodCauseDisplayDetailsMock.json';

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

export default function VoluenteerMatches() {
  const classes = useStyles();

  const [data, setData] = React.useState(goodCauseDisplayDetailsMock);

  return (
    <Container>
      <Paper className={classes.paper}>
        <PageHeading heading="Here is the list of available volunteer  matches" />
        <Profilebutton />
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
            />
          ))}
        </Grid>
      </Paper>
    </Container>
  );
}
