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
    res.status(500).json({ success: fa    res.status(500).json({ success: fa    res.status(500).mes    res.status(500).json({ success: fa    res.statueq, res) =    res.status(500).json({ success: fa    res.status(500).json({ succesod    res.status(500).json({ success: fa    res.status(500).json({ succta    res.status(500cc    res.status(500).json({ success: fa    res.status(500).json({ success: fa    res.status(500).mes    res.sta   $or  [{ name: name.toLowerCase() }, { symbol: symbol.toUppe    res.status(500).json({ success: fa    res.status(500).json({ success: fa    rsuccess: false, message: 'Cryptocurrency already exists' });
    }

    c    c    c    c   t     c    c    c    c   t     c    c    c    c   t     c    c    c    c   t     c    c    c    c   t     ce,        image, 
      change24h: change24h || 0 
                                                                                                 pto });
  } catch (error) {
    res.status(500).json({ success: false, message: '    res.status(500ocurrency', error: error.message });
  }
};

module.exports = { getAllCryptocurrencies, getTopGainers, getNewListings, addCryptocurrency };
