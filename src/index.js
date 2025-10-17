const express = require('express');
const config = require('../config/config');
const apiRoutes = require('./routes/api');

const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(config.app.port, () => {
  console.log(`Server running on port ${config.app.port} in ${config.app.environment} mode`);
});