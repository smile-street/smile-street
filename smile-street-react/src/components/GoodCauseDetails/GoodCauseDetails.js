import {useLocation, useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import {
  makeStyles,
  Paper,
  Grid,
  Container,
  TextField,
  Button,
} from '@material-ui/core';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, useQuery} from '@apollo/react-hooks';
import axios from 'axios';
import PageHeading from '../PageHeading/PageHeading';
import useStyle from '../Style/Style';

const client = new ApolloClient({
  uri: 'https://charitybase.uk/api/graphql',
  headers: {
    Authorization: 'Apikey 93ad424e-fcfd-4d5e-8820-32ecf2291c54',
  },
});

const GetGoodCauseName = (props) => {
  const classes = useStyle();
  let charityNumber = props.number;
  const COUNT_QUERY = gql`
    query CountCharitiesCHC($id: [ID]) {
      CHC {
        getCharities(filters: {id: $id}) {
          list {
            names {
              value
            }
          }
        }
      }
    }
  `;
  const {loading, error, data} = useQuery(COUNT_QUERY, {
    variables: {id: charityNumber},
  });
  let result = '';
  if (loading) {
    result = 'Loading...';
  }
  if (error) {
    result = 'Error :(';
  }
  if (data) {
    result = data.CHC.getCharities.list.length
      ? data.CHC.getCharities.list[0].names[0].value
      : 'No matches';
    props.setGoodCauseName(result === 'No matches' ? '' : result);
  }
  return (
    <TextField
      className={classes.root}
      variant="outlined"
      margin="normal"
      id="Name of good cause"
      label="Name of good cause"
      value={result}
      fullWidth
      readOnly
    />
  );
};

export default function GoodCauseDetails() {
  const [goodCauseNumber, setGoodCauseNumber] = useState('');
  const [goodCauseDescription, setGoodCauseDescription] = useState('');
  const [GoodCauseName, setGoodCauseName] = useState('');
  const goodCause_id = useLocation().state;
  const classes = useStyle();
  const history = useHistory();

  const handleClick = async (event) => {
    // handle update here
    console.log(goodCause_id)
    event.preventDefault();

    const addGoodCauseDetails = await axios
    .put(`https://2itobgmiv3.execute-api.eu-west-2.amazonaws.com/dev/GoodCauseDetails/${goodCause_id}`,
      {
        good_cause_name: GoodCauseName,
        descriptionofgoodcause: goodCauseDescription,
      }
    )
    .then(history.push({
        pathname: '/VolunteerAvailability',
        state: {goodCause_id: goodCause_id},
      })
    )
    .catch((error) => console.log(error));
  };

  return (
    <Container component="main">
      <Paper className={classes.paper}>
        <Container maxWidth="xs">
          <PageHeading heading="Good Cause Details" />
          <Grid container spacing={3}>
            <TextField
              variant="outlined"
              margin="normal"
              id="Charity Registration Number"
              label="Charity Registration Number"
              className={classes.root}
              fullWidth
              autoFocus
              placeholder="e.g. 1164681"
              value={goodCauseNumber}
              onChange={(event) => setGoodCauseNumber(event.target.value)}
            />
            <ApolloProvider client={client}>
              <GetGoodCauseName
                number={goodCauseNumber}
                setGoodCauseName={setGoodCauseName}
              />
            </ApolloProvider>
            <TextField
              variant="outlined"
              margin="normal"
              id="Good Cause Description"
              label="Add a few words describing your good cause"
              className={classes.root}
              value={goodCauseDescription}
              onChange={(event) => setGoodCauseDescription(event.target.value)}
              fullWidth
              multiline
              rows="6"
            />
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                className={classes.button}
                onClick={handleClick}
              >
                Add Opportunities
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Container>
  );
}
