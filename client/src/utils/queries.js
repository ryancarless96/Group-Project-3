import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query product {
    product {
      _id
      name
    }
  }
`;

export const QUERY_MATCHES = gql`
  query matches($_id: String) {
    matches(_id: $_id) {
      _id
      product1
      product2
      product1_votes
      product2_votes
    }
  }
`;
