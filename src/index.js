import React from 'react'
import ReactDOM from 'react-dom'
import '../src/styles/index.css'
import App from '../src/components/App'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import { WebSocketLink } from 'apollo-link-ws';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { getMainDefinition } from 'apollo-utilities';

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true
  }
});

// Create an http link:
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql'
});



const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  uri: 'http://localhost:4000',
})

//Apollo Client
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)