import { gql } from '@apollo/client';

export const CREATE_MATCHES = gql`
  mutation createMatches($product1: String!, $product2: String!) {
    createMatches(product1: $product1, product2: $product2) {
      _id
      product1
      product2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $productNum: Int!) {
    createVote(_id: $_id, productNum: $productNum) {
      _id
      product1
      product2
      product1_votes
      product2_votes
    }
  }
`;
