const db = require('../config/connection');
const { Product } = require('../models');

const productData = require('./productData.json');

db.once('open', async () => {
  await Product.deleteMany({});

  const products = await Product.insertMany(productData);

  console.log('Products seeded!');
  process.exit(0);
});
