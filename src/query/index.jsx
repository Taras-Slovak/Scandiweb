import {
  ApolloClient,
  InMemoryCache,
  gql,
} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
    query GetCategories {
      categories {
        name
        products{
          id
          name
          inStock
          gallery
          description
          category
          attributes{
            id
            name
            type
            items{
              displayValue
              value
              id
            }
          }
          prices{
            currency{
              label
              symbol
            }
          }
          brand
        }
      }
    }
    `,
  })
  .then((result) => console.log(result));
