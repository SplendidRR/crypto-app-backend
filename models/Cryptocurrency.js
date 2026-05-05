const mongoose = require('mongoose');

const cryptocurrencySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true },
  symbol: { type: String, required: true, unique: true, uppercase: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, required: true },
  change24h: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cryptocurrency', cryptocurrencySchema);
