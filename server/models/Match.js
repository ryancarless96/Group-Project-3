const { Schema, model } = require('mongoose');

const matchSchema = new Schema({
  product1: {
    type: String,
    required: true,
  },
  product2: {
    type: String,
    required: true,
  },
  product1_votes: {
    type: Number,
    default: 0,
  },
  product2_votes: {
    type: Number,
    default: 0,
  },
});

const Match = model('Match', matchSchema);

module.exports = Match;
