const Book = require("../models/Book");

async function index(req, res) {
  try {
    const books = await Book.getAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function show(req, res) {
  try {
    const title = req.params.name.toLowerCase();
    const book = await Book.getOneByTitle(title);
    res.json(book);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

async function update(req, res) {
  try {
    const title = req.params.name.toLowerCase();
    const data = req.body;
    const book = await Book.getOneByTitle(title);
    const result = await book.update(data);
    res.status(200).json(result);
  } catch (err) {
    res.status(404).send({ error: err.message });
  }
}

module.exports = { index, show, update };
