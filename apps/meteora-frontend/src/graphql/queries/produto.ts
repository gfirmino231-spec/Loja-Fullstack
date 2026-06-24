import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      image
      colors {
        id
        displayName
      }
      sizes {
        id
        displayName
      }
    }
  }
`;
