require('dotenv').config();

module.exports = {
  client: 'mysql2',
  connection: {
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'books',
  },
};
