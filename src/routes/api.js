const express = require('express');
const config = require('../../config/config');

const router = express.Router();

router.get('/secure', (req, res) => {
  // Example: Accessing a secret key
  res.json({ message: 'This is a secure endpoint', apiKey: config.secrets.apiKey });
});

module.exports = router;