import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const client = new ApolloClient({
  uri: 'https://flyby-gateway.herokuapp.com/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);

reportWebVitals();
