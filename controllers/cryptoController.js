const Cryptocurrency = require('../models/Cryptocurrency');

const getAllCryptocurrencies = async (req, res) => {
  try {
    const cryptos = await Cryptocurrency.find().sort({ createdAt: -1 });
    res.json({ success: true, count: cryptos.length, data: cryptos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching cryptocurrencies', error: error.message });
  }
};

const getTopGainers = async (req, res) => {
  try {
    const gainers = await Cryptocurrency.find().sort({ change24h: -1 }).limit(10);
    res.json({ success: true, count: gainers.length, data: gainers });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching top gainers', error: error.message });
  }
};

const getNewListings = async (req, res) => {
  try {
    const newListings = await Cryptocurrency.find().sort({ createdAt: -1 }).limit(10);
    res.json({ success: true, count: newListings.length, data: newListings });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching new listings', error: error.message });
  }
};

const addCryptocurrency = async (reqconst  =const addCryptocurrency = async (reqconst  =const addCryptocurrency = aodconst addCryptocurrency = async (reqconst  =const addCryptocurrency =taconst addCryptocurccess: false, message: 'All fields required' });
    }

    const existing = await Cryptocurrency.findOne({ $or: [  na e:     const existing = await Cryptocurrency.pperCase()    const existing = await Cryptocurrency.findOne({ $or: [  na e:     const existes    const existing = await Cryptocurrency.findOne({ $or: [  na e:    wa    const existingcr    const existing = await Cryptocurrency.findOne({ $or: [  na e:     const existing = await Cryptocurren;
     es.     es.     es.     es.     es.     es.   'C     eur     es.     es.     es.     es.     es.     es.   'C     eur     es.     es.     es.:      es.     es.     es.     es.     es.     es.   'C     eur     es.     es.;
     es.     es.  { getAllCryptocurrencies, getTopGainers, getNewListings, addCryptocurrency };
