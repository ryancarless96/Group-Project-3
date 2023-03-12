const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    _id: ID!
    name: String!
  }

  type List {
    _id: ID!
    product1: String!
    product2: String!
    product1_votes: Int
    product2_votes: Int
  }

  type Query {
    product: [Product]
    lists(_id: String): [List]
  }

  type Mutation {
    createList(product1: String!, product2: String!): List
    createVote(_id: String!, productNum: Int!): List
  }
`;

module.exports = typeDefs;
