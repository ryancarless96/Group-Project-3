const { Product, Match } = require('../models');

const resolvers = {
  Query: {
    product: async () => {
      return Product.find({});
    },
    matches: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Match.find(params);
    },
  },
  Mutation: {
    createMatch: async (parent, args) => {
      const match = await Match.create(args);
      return match ;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await Match.findOneAndUpdate(
        { _id },
        { $inc: { [`product${productNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
