const express = require('express');
const router = express.Router();
const db = require('../models');


router.get('/products', (req, res) => {
  db.product.findAll().then((products) => {
    res.status(200).json(products);
  }).catch(err => {
    console.error('Error fetching products:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

module.exports = router;