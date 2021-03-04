//npm install apollo-boost, @apollo/react-hooks, graphql
import ApolloClient, { gql } from "apollo-boost"
import { ApolloProvider, useQuery } from "@apollo/react-hooks"

let charityNumber = 1017504 // should be changed by new input from user (others for testing: 1050488, 1114004)

const client = new ApolloClient({
    uri: "https://charitybase.uk/api/graphql",
    headers: {
        Authorization: "Apikey 93ad424e-fcfd-4d5e-8820-32ecf2291c54",
    },
})
const COUNT_QUERY = gql`
  {
    CHC {
      getCharities(filters: { id: ${charityNumber} }) {
        list {
          names { value } 
        }  
      }
    }
  }
  
`
const GetGoodCauseName = () => {
    const { loading, error, data } = useQuery(COUNT_QUERY)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    return <h1>{data.CHC.getCharities.list[0].names[0].value}</h1>
}

const GoodCauseName = () => {
    return (
        <ApolloProvider client={client}>
            <GetGoodCauseName />
        </ApolloProvider>
    )
}

export default GoodCauseName;