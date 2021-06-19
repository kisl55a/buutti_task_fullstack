require('dotenv').config();

module.exports = {
  client: 'mysql2',
  connection: {
    port: 3306,
    host: process.env.HOST || 'localhost',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || 'root',
    database: process.env.DATABASE || 'books',
  },
};
