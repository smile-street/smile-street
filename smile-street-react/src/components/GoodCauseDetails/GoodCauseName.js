import {TextField} from '@material-ui/core';
import ApolloClient, {gql} from 'apollo-boost';
import {ApolloProvider, useQuery} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://charitybase.uk/api/graphql',
  headers: {
    Authorization: 'Apikey 93ad424e-fcfd-4d5e-8820-32ecf2291c54',
  },
});

const GetGoodCauseName = (props) => {
  // you can check the charitybase getcharities schema to find out what other values can be returned
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
  }
  return (
    <TextField
      variant="outlined"
      margin="normal"
      id="Name of good cause"
      label="Name of good cause"
      s
      value={result}
      fullWidth
      disableds
    />
  );
};

const GoodCauseName = (props) => {
  return (
    <ApolloProvider client={client}>
      <GetGoodCauseName number={props.number} />
    </ApolloProvider>
  );
};

export default GoodCauseName;
