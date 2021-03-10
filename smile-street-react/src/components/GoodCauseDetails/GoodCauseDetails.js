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
import PageHeading from '../PageHeading/PageHeading';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#53bd98',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#449f80',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#449f80',
    },
    '& .MuiInputLabel-outlined.Mui-focused': {
      color: '#449f80',
    },
    margin: 8,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    width: '100%',
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

const client = new ApolloClient({
  uri: 'https://charitybase.uk/api/graphql',
  headers: {
    Authorization: 'Apikey 93ad424e-fcfd-4d5e-8820-32ecf2291c54',
  },
});

const GetGoodCauseName = (props) => {
  const classes = useStyles();
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

  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    console.log(
      `Charity number: ${goodCauseNumber}
    Good Cause name: ${GoodCauseName}
    Description: ${goodCauseDescription}
    `
    );

    history.push({pathname: '/GoodCauseOpportunity'});
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
                className={classes.buttonColor}
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
