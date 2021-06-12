const knex = require('../database/database');
const { data } = require('../database/data');

const book = {
  createBooksTable: async (callback) => {
    // This is done for deploying the books on a free heroku database
    return knex.schema
      .hasTable('books')
      .then(function (exists) {
        if (!exists) {
          return knex.schema
            .createTable('books', function (t) {
              t.increments('id').primary();
              t.string('title', 100).defaultTo('');
              t.string('author', 100).defaultTo('');
              t.string('description', 500).defaultTo('');
            })
            .then(() => callback.then('Table is created'))
            .catch((err) =>
              callback.catch(`Error with table creation: ${err}`)
            );
        } else {
          callback.then('Books table is in place');
        }
      })
      .catch((err) =>
        callback.catch(`Error with table existance checup: ${err}`)
      );
  },
  insertDefaultData: async function (callback) {
    // Done for presentation purposes. Inserts data from this repo to the database if no data is presented
    let booksInfo = await knex('books').select();
    if (booksInfo.length == 0) {
      return knex('books')
        .insert(data)
        .then(() => callback.then('Data is inserted'))
        .catch((err) => callback.catch(`Error with data inserting: ${err}`));
    } else {
      return callback.then('Table data is in place');
    }
  },
  getAllBooks: async function (callback) {
    return knex('books')
      .select()
      .then((data) => callback.then(data))
      .catch((err) => callback.catch(err));
  },
  getBookById: async function (id, callback) {
    return knex('books')
      .select()
      .where('id', id)
      .then((data) => callback.then(data))
      .catch((err) => callback.catch(err));
  },
  createBook: async function (data, callback) {
    return knex('books')
      .insert(data)
      .then((res) => callback.then(res))
      .catch((err) => callback.catch(err));
  },
  updateBook: async function (id, data, callback) {
    return knex('books')
      .update(data)
      .where('id', id)
      .then((res) => callback.then(res))
      .catch((err) => callback.catch(err));
  },
  deleteBook: async function (id, callback) {
    return knex('books')
      .delete()
      .where('id', id)
      .then((res) => callback.then(res))
      .catch((err) => callback.catch(err));
  },
};
module.exports = book;
