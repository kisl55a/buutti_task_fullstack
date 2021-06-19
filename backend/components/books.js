const express = require('express');
const router = express.Router();
let book = require('../models/bookModel');

// Create tables
const createTables = async () => {
  await book.createBooksTable({
    then: (message) => {
      console.log(message);
    },
    catch: (message) => {
      console.log(message);
    },
  });
  await book.insertDefaultData({
    then: (message) => {
      console.log(message);
    },
    catch: (err) => {
      console.log(err);
    },
  });
};
createTables();

// GET all books or a specific book by id
router.get('/:id?', function (req, res) {
  if (req.params.id) {
    book.getBookById(req.params.id, {
      then: (rows) => {
        res.status(200).json({ code: 1, rows });
      },
      catch: (err) => {
        res.status(500).json({ code: 1, err });
      },
    });
  } else {
    book.getAllBooks({
      then: (rows) => {
        res.status(200).json({ code: 1, rows });
      },
      catch: (err) => {
        res.status(500).json({ code: 1, err });
      },
    });
  }
});

// Create a new book
router.post('/', function (req, res) {
  book.createBook(req.body, {
    then: (rows) => {
      res.status(200).json({ code: 1, rows });
    },
    catch: (err) => {
      res.status(500).json({ code: 0, err });
    },
  });
});

// Edit book
router.put('/:id', function (req, res) {
  book.updateBook(req.params.id, req.body, {
    then: (rows) => {
      res.status(200).json({ code: 1, rows });
    },
    catch: (err) => {
      res.status(500).json({ code: 0, err });
    },
  });
});

// Delete book
router.delete('/:id', function (req, res) {
  book.deleteBook(req.params.id, {
    then: (rows) => {
      res.status(200).json({ code: 1, rows });
    },
    catch: (err) => {
      res.status(500).json({ code: 0, err });
    },
  });
});

module.exports = router;
