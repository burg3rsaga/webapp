require('dotenv').config();

module.exports = {
  app: {
    port: process.env.PORT || 3000,
    environment: process.env.NODE_ENV || 'development',
  },
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/myapp',
  },
  secrets: {
    jwtSecret: process.env.JWT_SECRET || 'default_jwt_secret',
    apiKey: process.env.API_KEY || 'default_api_key',
  },
};