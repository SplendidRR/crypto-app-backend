const express = require('express');
const router = express.Router();
const { getAllCryptocurrencies, getTopGainers, getNewListings, addCryptocurrency } = require('../controllers/cryptoController');

router.get('/', getAllCryptocurrencies);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);
router.post('/', addCryptocurrency);

module.exports = router;
