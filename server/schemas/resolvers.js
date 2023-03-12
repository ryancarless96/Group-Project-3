const { Product, List } = require('../models');

const resolvers = {
  Query: {
    product: async () => {
      return Product.find({});
    },
    lists: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return List.find(params);
    },
  },
  Mutation: {
    createList: async (parent, args) => {
      const list = await List.create(args);
      return list;
    },
    createVote: async (parent, { _id, techNum }) => {
      const vote = await List.findOneAndUpdate(
        { _id },
        { $inc: { [`tech${productNum}_votes`]: 1 } },
        { new: true }
      );
      return vote;
    },
  },
};

module.exports = resolvers;
