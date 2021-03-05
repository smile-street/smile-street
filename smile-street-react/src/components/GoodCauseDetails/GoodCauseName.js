//npm install apollo-boost, @apollo/react-hooks, graphql
import { useState } from "react";
import { TextField } from "@material-ui/core"
import ApolloClient, { gql } from "apollo-boost"
import { ApolloProvider, useQuery } from "@apollo/react-hooks"

const client = new ApolloClient({
    uri: "https://charitybase.uk/api/graphql",
    headers: {
        Authorization: "Apikey 93ad424e-fcfd-4d5e-8820-32ecf2291c54",
    },
})
function setClient(number) {
    const COUNT_QUERY = gql`
      {
        CHC {
          getCharities(filters: { id: ${number} }) {
            list {
              names { value } 
            }  
          }
        }
      }
      
    `
    return COUNT_QUERY
}
const GetGoodCauseName = (props) => {
    let charityNumber = props.number // should be changed by new input from user (others for testing: 1050488, 1114004)
    console.log(props)
    const COUNT_QUERY = setClient(charityNumber)
    const { loading, error, data } = useQuery(COUNT_QUERY)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return (
        <TextField
            variant="outlined"
            margin="normal"
            id="Name of good cause"
            label="Name of good cause"
            value = {data.CHC.getCharities.list[0].names[0].value}
            fullWidth
            disabled
        />
    )
}

const GoodCauseName = (props) => {
    return (
        <ApolloProvider client={client}>
            <GetGoodCauseName number={props.number} />
        </ApolloProvider>
    )
}

export default GoodCauseName;