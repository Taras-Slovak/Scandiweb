import { gql, useQuery } from '@apollo/client';

//  const GET_ALL = gql`
// query GetAllData {
//   categories {
//     name
//     products {
//       id
//       name
//       inStock
//       gallery
//       description
//       category
//       attributes {
//         id
//         name
//         type
//         items {
//           displayValue
//           value
//           id
//         }
//       }
//       prices {
//         currency {
//           label
//           symbol
//         }
//         amount
//       }
//       brand
//     }
//   }
// }
// `;

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
    }
  }
`;

const GET_PRODUCTS_LIST = gql`
  query GetProductsList {
    category(input: { title: "all" }) {
      name
      products {
        id
        name
        inStock
        gallery
      }
    }
  }
`;

// const GET_PRODUCT_DETAILS = gql`
// query GetProductDetails  {
//   product(id:"huarache-x-stussy-le"){
//       name
//       gallery
//       description
//       attributes{
//         id
//         name
//         type
//         items{
//           displayValue
//           value
//           id
//         }
//             }
//       prices{
//         currency{
//           label
//           symbol
//         }
//         amount
//       }
//   }
// }

// `;

export const useGetCategories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES);
  return { loading, error, data };
};

export const useGetProductsList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS_LIST);
  return { loading, error, data };
};
