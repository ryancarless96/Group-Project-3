const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
  }

  type Match {
    _id: ID!
    product1: String!
    product2: String!
    product1_votes: Int
    product2_votes: Int
  }

  type Query {
    product: [Product]
    matches(_id: String): [Match]
  }

  type Mutation {
    createMatch (product1: String!, product2: String!):Match
    createVote(_id: String!, productNum: Int!):Match
  }
`;

module.exports = typeDefs;
