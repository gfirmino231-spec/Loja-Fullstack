import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(limit: 100) {
      id
      name
      description
      price
      image
      category {
        id
        displayName
      }
      colors {
        id
        displayName
        image
        stock
      }
      sizes {
        id
        displayName
        stock
      }
    }
  }
`;
