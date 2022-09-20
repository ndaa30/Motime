import { ApolloClient, InMemoryCache } from "@apollo/client";
const apolloClient = new ApolloClient({
  uri: "http://192.168.43.79:4000",
  cache: new InMemoryCache(),
});

export default apolloClient;
