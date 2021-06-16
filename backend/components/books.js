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

router.get('/:id?', function (req, res) {
  if (req.params.id) {
    book.getBookById(req.params.id, {
      then: (rows) => {
        res.status(202).json({ code: 1, rows });
      },
      catch: (err) => {
        res.status(500).json({ code: 1, err });
      },
    });
  } else {
    book.getAllBooks({
      then: (rows) => {
        res.status(202).json({ code: 1, rows });
      },
      catch: (err) => {
        res.status(500).json({ code: 1, err });
      },
    });
  }
});

router.post('/', function (req, res) {
  book.createBook(req.body, {
    then: (rows) => {
      res.status(202).json({ code: 1, rows });
    },
    catch: (err) => {
      res.status(500).json({ code: 0, err });
    },
  });
});

router.put('/:id', function (req, res) {
  book.updateBook(req.params.id, req.body, {
    then: (rows) => {
      res.status(202).json({ code: 1, rows });
    },
    catch: (err) => {
      res.status(500).json({ code: 0, err });
    },
  });
});
router.delete('/:id', function (req, res) {
  book.deleteBook(req.params.id, {
    then: (rows) => {
      res.status(202).json({ code: 1, rows });
    },
    catch: (err) => {
      res.status(500).json({ code: 0, err });
    },
  });
});

module.exports = router;
